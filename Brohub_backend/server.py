from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import gp
import os
import preference_matcher

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

@app.route("/post/<id>", methods=['GET'])
def get_post(id):
    # Placeholder implementation to fetch post data based on the post ID
    # Replace this with actual logic to retrieve post data from a database or elsewhere
    post_data = {
        "id": id,
        "title": "Sample Title",
        "content": "Sample Content"
    }
    return jsonify(post_data), 200

@app.route("/posts" , methods=['GET'])
def all_posts():
    all_posts = gp.get_all_posts()
    print(all_posts)
    posts = []
    for post in all_posts:
        temp_post = {
        "id": post[0],
        "title": post[1],
        "content": post[2],
        "liked": post[3],
        "posted_by": post[4],
        "image_id": post[5]
        }
        posts.append(temp_post)

    # post_data = {
    #     "id": id,
    #     "title": "Sample Title",
    #     "content": "Sample Content"
    # }
    return jsonify(posts), 200


# @app.route('/home', methods=['GET'])
# def handleIndex():
#     # Placeholder implementation for the home route
#     return jsonify({"success": True}), 200

@app.route('/events', methods=['GET'])
def get_upcoming_events():
    all_events= gp.get_all_events()
    print(all_posts)
    events = []
    for event in all_events:
        temp_post = {
        "image_id": event[0],
        "title": event[1],
        "date": event[2],
        "liked": event[3],
        "posted_by": "Brohub",
        # "image_id": event[5]
        }
        events.append(temp_post)

    # post_data = {
    #     "id": id,
    #     "title": "Sample Title",
    #     "content": "Sample Content"
    # }
    return jsonify(events), 200


@app.route('/event/<event_id>', methods=['GET'])
def get_event(event_id):
    # Placeholder implementation for individual event page
    event_data = gp.event_page(event_id)
    return jsonify(event_data), 200

@app.route('/chat', methods=['GET'])
def chat_functionality():
    # Placeholder implementation for chat functionality
    return "Chat functionality", 200

@app.route('/get_friends/<user_id>', methods=['GET'])
def get_friends(user_id):
    preference_matcher.recommend_friends(user_id)
    return jsonify(preference_matcher.recommend_friends(user_id)), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
