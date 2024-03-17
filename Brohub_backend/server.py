from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)

cors = CORS(app)


@app.route('/home', methods=['GET'])
def handleIndex():
    return json.dumps("{success: true}")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
