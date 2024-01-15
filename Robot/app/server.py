import cv2
import socketio
import base64
import eventlet
import time
import threading
import math
import random
import os
import json

jpg_data = ''

LHData = 0
robotDegree = 0

def loadConfigFile():
  configFile = 'config.json'
  dir = __file__.split('\\')
  dirLength = len(dir)
  dir[dirLength-1] = configFile

  configFileDir = '\\'.join(dir)
  if not os.path.exists(configFileDir):
    config = {
    "Kamera": {
        "Omnivision": 0,
        "FrontCam": 1,
        "State": False
    },
    "Bola": {
        "L-H": 0,
        "L-S": 0,
        "L-V": 0,
        "U-H": 0,
        "U-S": 0,
        "U-V": 0
    },
    "Bola2": {
        "L-H": 0,
        "L-S": 0,
        "L-V": 0,
        "U-H": 0,
        "U-S": 0,
        "U-V": 0
    },
    "Cyan": {
        "pos": "CF",
        "L-H": 0,
        "L-S": 0,
        "L-V": 0,
        "U-H": 0,
        "U-S": 0,
        "U-V": 0
    },
    "Magenta": {
        "pos": "MO",
        "L-H": 0,
        "L-S": 0,
        "L-V": 0,
        "U-H": 0,
        "U-S": 0,
        "U-V": 0
    },
    "Setting": {
        "kamera1": {
            "f": 0,
            "b": 0,
            "c": 0,
            "s": 0,
            "g": 0,
            "e": 0,
            "w": 0
        },
        "kamera2": {
            "f": 0,
            "b": 0,
            "c": 0,
            "s": 0,
            "g": 0,
            "e": 0,
            "w": 0
        }
    },
    "Robot": {
        "type": "P2",
        "tim": "c",
        "gawang": "ka"
    },
    "HomePos": {
        "kiri": {
            "P1": {
                "HX": 2,
                "HY": 4.5
            },
            "P2": {
                "HX": -2,
                "HY": 4.5
            }
        },
        "kanan": {
            "P1": {
                "HX": -2,
                "HY": -4.5
            },
            "P2": {
                "HX": 2,
                "HY": -4.5
            }
        },
        "Rot": 0,
        "Rot0": 2
      }
    }
    with open(configFileDir,'w') as f:
      json.dump(config,f,indent=4)

  with open(configFileDir,'r') as f:
    return json.load(f)

def robotData():
  global robotDegree
  while True:
    robotDegree = random.randint(0,360)
    print(robotDegree)
    
    time.sleep(0.8)

def imageProcessing():
    global sio, jpg_data
    cap = cv2.VideoCapture(0)
    if not cap:
      print('cap not opened')
    while True:
      ret, frame = cap.read()
      if ret:
        # Encode the frame as JPEG
        _, buffer = cv2.imencode('.jpg', frame)
        jpg_data = str(base64.b64encode(buffer).decode('UTF-8'))

        # Send the frame to the server using Socket.io
      frame = cv2.putText(frame,str(round((float(LHData)/100)*255)),(50,50),cv2.FONT_HERSHEY_SIMPLEX,2,(0,0,255))
      cv2.imshow("img",frame)
      if(cv2.waitKey(1) == ord('q')):
        break

    # Clean up
    cap.release()
    cv2.destroyAllWindows()

sio = socketio.Server(cors_allowed_origins='*')

@sio.event
def connect(sid, environ):
  sio.emit('configData',loadConfigFile())
  print(f"Connected: {sid}")

@sio.event
def react(sid,msg):
#    print(msg)
   sio.emit("latency_robot1",{"latency":round(time.time_ns()/1000000)-int(msg),"time":msg})
   sio.emit('stream', jpg_data)
   sio.emit('robotData',{'robotDegree':robotDegree})

# @sio.event
# def sendRobotData(sid,msg):
  

@sio.event
def disconnect(sid):
    print(f"Disconnected: {sid}")

@sio.event
def LH(sid,msg):
  global LHData
  print(msg)
  LHData = msg

app = socketio.WSGIApp(sio)

threading.Thread(target=imageProcessing).start()
threading.Thread(target=robotData).start()

# Run the server on localhost and port 5000
socketio.Middleware(app)
# socketio.Server(app)
socketio.WSGIApp(sio)
eventlet.wsgi.server(eventlet.listen(('192.168.1.106', 3001)), app)

