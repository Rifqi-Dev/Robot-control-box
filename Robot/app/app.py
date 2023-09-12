import cv2
import socketio
import base64
import io
import time
import os
import json

# Initialize Socket.io client
sio = socketio.Client()

# Connect to the server
sio.connect('http://localhost:3001')

# Initialize the webcam
cap = cv2.VideoCapture(0)

with open(os.path.join(os.getcwd(),"Robot","app","config.json")) as f:
    sio.emit("pythonJson",json.load(f))

while True:
    ret, frame = cap.read()
    if ret:
        # Encode the frame as JPEG
        _, buffer = cv2.imencode('.jpg', frame)
        jpg_data = base64.b64encode(buffer)

        # Send the frame to the server using Socket.io
        sio.emit('python', str(jpg_data.decode('UTF-8')))

    cv2.imshow("img",frame)
    if(cv2.waitKey(1) == ord('q')):
        sio.disconnect()
        break
    # Add a delay to control the frame rate (adjust as needed)
    time.sleep(0.05)

# Clean up
cap.release()
cv2.destroyAllWindows()

@sio.on("tes")
def apatu(data):
    print(data)

@sio.event
def disconnect():
    print('[INFO] Disconnected from server')