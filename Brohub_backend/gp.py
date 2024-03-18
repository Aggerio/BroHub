import sqlite3

# get all posts
def get_all_posts():
   conn = sqlite3.connect('brohub.db')
   cursor = conn.cursor()
   cursor.execute("SELECT * FROM posts")
   posts = cursor.fetchall()
   conn.close()
   return posts

# get all events
def get_all_events():
   conn = sqlite3.connect('brohub.db')
   cursor = conn.cursor()
   cursor.execute("SELECT * FROM events")
   events = cursor.fetchall()
   conn.close()
   return events

# get all groups
def get_all_groups():
   conn = sqlite3.connect('brohub.db')
   cursor = conn.cursor()
   cursor.execute("SELECT * FROM groups")
   groups = cursor.fetchall()
   conn.close()
   return groups

def get_hobbies(user_id: int):
   # return all the hobbies of a particular user
   conn = sqlite3.connect('brohub.db')
   cursor = conn.cursor()
   cursor.execute("SELECT hobby FROM hobbies WHERE id = ?", (user_id,))
   hobbies = [row[0] for row in cursor.fetchall()]
   conn.close()
   return hobbies

# return the details of the personal page
def personal_page(id: int):
   conn = sqlite3.connect('brohub.db')
   cursor = conn.cursor()
   cursor.execute("SELECT * FROM profiles WHERE id = ?", (id,))
   profile = cursor.fetchone()
   if profile:
       personal_page = {
           'id': profile[0],
           'name': profile[1],
           'age': profile[2],
           'religion': profile[3],
           'location': profile[4],
           'profile_image_id': profile[5]
       }
   else:
       personal_page = None
   conn.close()
   return personal_page

# return the details of the event page
def event_page(id: int):
   conn = sqlite3.connect('brohub.db')
   cursor = conn.cursor()
   cursor.execute("SELECT * FROM events WHERE id = ?", (id,))
   event = cursor.fetchone()
   if event:
       event_page = {
           'id': event[0],
           'name': event[1],
           'date': event[2],
           'num_applied': event[3],
           'cover_photo_id': event[4]
       }
   else:
       event_page = None
   conn.close()
   return event_page

# return the details of the group page
def group_page(id: int):
   conn = sqlite3.connect('brohub.db')
   cursor = conn.cursor()
   cursor.execute("SELECT * FROM groups WHERE id = ?", (id,))
   group = cursor.fetchone()
   if group:
       group_page = {
           'id': group[0],
           'name': group[1],
           'members': group[2],
           'motto': group[3],
           'profile_image_id': group[4]
       }
   else:
       group_page = None
   conn.close()
   return group_page

# return the details of a post
def post_info(id: int):
   conn = sqlite3.connect('brohub.db')
   cursor = conn.cursor()
   cursor.execute("SELECT * FROM posts WHERE id = ?", (id,))
   post = cursor.fetchone()
   if post:
       post_info = {
           'id': post[0],
           'name': post[1],
           'description': post[2],
           'people_liked': post[3],
           'group_name': post[4],
           'image_id': post[5]
       }
   else:
       post_info = None
   conn.close()
   return post_info