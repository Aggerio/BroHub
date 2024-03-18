from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import gp
import os
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
    # Placeholder implementation to fetch post data based on the post ID
    # Replace this with actual logic to retrieve post data from a database or elsewhere
    post_data = {
        "id": id,
        "title": "Sample Title",
        "content": "Sample Content"
    }
    return jsonify(post_data), 200

@app.route('/home', methods=['GET'])
def handleIndex():
    # Placeholder implementation for the home route
    return jsonify({"success": True}), 200

@app.route('/upcoming-events', methods=['GET'])
def get_upcoming_events():
    # Placeholder implementation for upcoming events page
    upcoming_events = {}
    return jsonify(upcoming_events), 200

@app.route('/group-posts', methods=['GET'])
def get_group_posts():
    # Placeholder implementation for feed based on group posts
    group_posts = {}
    return jsonify(group_posts), 200

@app.route('/event/<event_id>', methods=['GET'])
def get_event(event_id):
    # Placeholder implementation for individual event page
    event_data = {
        "event_id": event_id,
        "name": "Event Name",
        "date": "Event Date",
        "location": "Event Location",
        "description": "Event Description"
    }
    return jsonify(event_data), 200

@app.route('/chat', methods=['GET'])
def chat_functionality():
    # Placeholder implementation for chat functionality
    return "Chat functionality", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
