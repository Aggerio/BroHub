from flask import Flask, request, send_file
from flask_cors import CORS
import os
import gp
import json

app = Flask(__name__)

cors = CORS(app)

@app.route("/image/<filename>")
def get_image(filename):
    img_path = 'imgs'
    image_path = os.path.join(img_path, filename + '.jpeg')
    if os.path.exists(image_path):
        return send_file(image_path, mimetype='image/jpeg')
    else: 
        return "Image not Found", 404

@app.route("/post/<id>")
def get_post(id):
    return "post data", 200

@app.route('/home', methods=['GET'])
def handleIndex():
    return json.dumps("{success: true}")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
