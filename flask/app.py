from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
import cv2
import json 
#import logging
import os

app = Flask(__name__)
CORS(app)

print("App started")
#logging.warning("Log app started")

@app.route('/api/v1.0/test', methods=['GET'])
def test_response():
    print(os.path.abspath(os.getcwd()))
    img = cv2.imread('./image/dog.jpg')
    #imgTest = cv2.imread('/home/ubuntu/Documents/python/1.jpg')
    h, w, c = img.shape
    #ht, wt, ct = imgTest.shape
    print(h,',',w)
    #print("Test -", ht,',::',wt)
    """Return a sample JSON response."""
    sample_response = {
        "items": [
            { "id": 1, "name": "Apples",  "price": "$2" },
            { "id": 2, "name": "Peaches", "price": "$5" },
            { "id": 3, "name": "height", "price": h },
            { "id": 4, "name": "width", "price": w }
        ]
    }
    print('cleaner is up', flush=True)
    path = 'imgFile.txt'
    f = open(path, 'r').read().split('\n')
    imgList=[]
    count = 0
    for line in f:
        data = {}
        print(line, flush=True)
        data['id'] = count
        data['img'] = line
        imgList.append(data)
        count +=1

    json_data = {} #json.dumps(imgList)
    json_data["items"] = imgList
    print("json:",imgList, flush=True)
    myList = [{'a': 54}, {'b': 41, 'c':87}]
    print(myList[1], flush=True)
    # JSONify response
    response = make_response(jsonify(json_data))
    #make_response(jsonify(sample_response))

    # Add Access-Control-Allow-Origin header to allow cross-site request
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    
    # Mozilla provides good references for Access Control at:
    # https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    # https://developer.mozilla.org/en-US/docs/Web/HTTP/Server-Side_Access_Control
    #fp = open("C:\Users\USER\Desktop\filename.txt", "a")
    #fp.write("This is a testing!")
    #fp.close()

    return response


@app.route("/api/v2.0/test",  methods = ['POST'])
def hello():
    print("--------------------------------------test", flush=True)
    print(request.get_json(), flush=True)
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 
