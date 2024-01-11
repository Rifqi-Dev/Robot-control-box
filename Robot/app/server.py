import cv2
import socketio
import base64
import eventlet
import time
import threading
import math
import random

jpg_data = ''

LHData = 0
robotDegree = 0

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
    print(f"Connected: {sid}")

@sio.event
def react(sid,msg):
  #  print(msg)
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
eventlet.wsgi.server(eventlet.listen(('localhost', 3001)), app)

