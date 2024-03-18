import sqlite3

# get all posts 
def get_all_posts():
    pass

# get all events
def get_all_events():
    pass

# get all groups 
def get_all_groups():
    pass

# return the details of the personal page 
def personal_page(id:int):
    pass

# return the details of the event page 
def event_page(id:int):
    pass

#return the details of the group page
def group_page(id: int):
    pass

#return the details of a post 
def post_info(id:int):
    conn = sqlite3.connect('brohub.db')
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM posts WHERE id = ?", (id,))
    post = {}
    temp_post = cursor.fetchone()
    post['id'] = temp_post[0]
    post['name'] = temp_post[1]
    post['description'] = temp_post[2]
    post['people_liked'] = temp_post[3]
    post['group_name'] = temp_post[4]
    post['image_id'] = temp_post[5]

    return post