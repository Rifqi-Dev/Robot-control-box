import cv2
import socketio
import base64
import eventlet
import time
import threading

jpg_data = ''

def imageProcessing():
    global sio, jpg_data
    cap = cv2.VideoCapture(0)
    while True:
      ret, frame = cap.read()
      if ret:
        # Encode the frame as JPEG
        _, buffer = cv2.imencode('.jpg', frame)
        jpg_data = str(base64.b64encode(buffer).decode('UTF-8'))

        # Send the frame to the server using Socket.io

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
   print(msg)
   sio.emit('stream', jpg_data)

@sio.event
def disconnect(sid):
    print(f"Disconnected: {sid}")


app = socketio.WSGIApp(sio)

#threading.Thread(target=imageProcessing).start()
# Run the server on localhost and port 5000
socketio.Middleware(app)
# socketio.Server(app)
socketio.WSGIApp(sio)
eventlet.wsgi.server(eventlet.listen(('localhost', 3001)), app)

