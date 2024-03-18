import sqlite3
import random

# # 
# conn = sqlite3.connect('brohub.db')
# cursor = conn.cursor()

# cursor.execute('''CREATE TABLE IF NOT EXISTS profiles (
#                     id INTEGER PRIMARY KEY,
#                     name TEXT,
#                     age INTEGER,
#                     religion TEXT,
#                     location TEXT,
#                     profile_image_id INTEGER
#                 );''')
# res = cursor.fetchall()
# print("Res: ", res)
# conn.commit()
# # 
# # Groups 
# cursor.execute("""CREATE TABLE IF NOT EXISTS groups(
#                id INTEGER PRIMARY KEY,
#                name TEXT,
#                members INTEGER,
#                motto TEXT,
#                profile_image_id INTEGER
#                 )""")

# res = cursor.fetchall()
# print("Res: ", res)

# conn.commit()
# # Hobbies 
# cursor.execute("""CREATE TABLE IF NOT EXISTS hobbies(
#                id INTEGER ,
#                hobby TEXT
#                 )""")

# res = cursor.fetchall()
# print("Res: ", res)
# conn.commit()
# # 
# # involved_groups 
# cursor.execute("""CREATE TABLE IF NOT EXISTS involved_groups(
#                id INTEGER,
#                group_name TEXT
#                 )""")

# res = cursor.fetchall()
# print("Res: ", res)
# conn.commit()
# # 
# # preferences
# cursor.execute("""CREATE TABLE IF NOT EXISTS preferences(
#                id INTEGER ,
#                preference TEXT
#                 )""")

# res = cursor.fetchall()
# print("Res: ", res)
# conn.commit()
# # posts 
# cursor.execute("""CREATE TABLE IF NOT EXISTS posts(
#                 id INTEGER PRIMARY KEY,
#                name TEXT,
#                description TEXT,
#                people_liked INTEGER,
#                group_name TEXT,
#                image_id INTEGER
#                 )""")

# res = cursor.fetchall()
# print("Res: ", res)
# conn.commit()
# # liked
# cursor.execute("""CREATE TABLE IF NOT EXISTS liked(
#                 user_id INTEGER,
#                 post_id INTEGER
#                 )""")

# res = cursor.fetchall()
# print("Res: ", res)
# conn.commit()
# # uploaded_images
# cursor.execute("""CREATE TABLE IF NOT EXISTS uploaded_images(
#                 user_id INTEGER,
#                 image_id INTEGER
#                 )""")

# res = cursor.fetchall()
# print("Res: ", res)
# conn.commit()
# # events 
# cursor.execute("""CREATE TABLE IF NOT EXISTS events(
#                 id INTEGER PRIMARY KEY,
#                 name TEXT,
#                 date TEXT,
#                 num_applied TEXT,
#                 cover_photo_id INTEGER
#                 )""")

# res = cursor.fetchall()
# print("Res: ", res)
# conn.commit()
# # events_applied
# cursor.execute("""CREATE TABLE IF NOT EXISTS events_applied(
#                 user_id INTEGER,
#                 event_id INTEGER
#                 )""")

# res = cursor.fetchall()
# print("Res: ", res)
# conn.commit()

# # Create the fake users, post, groups and events

# #Create data for 10 users
# male_names = [
#     "James",
#     "John",
#     "Robert",
#     "Michael",
#     "William",
#     "David",
#     "Joseph",
#     "Charles",
#     "Thomas",
#     "Daniel"
# ]
# conn = sqlite3.connect('brohub.db')
# cursor = conn.cursor()


# for i in range(len(male_names)):
#     name = male_names[i]
#     age = random.randint(35, 70)
#     religion = "Hindu"  # Assuming it's a constant value for all profiles
#     location = "Vellore"  # Assuming it's a constant value for all profiles
#     profile_image_id = random.randint(1, 5)
#     cursor.execute(f'''INSERT INTO profiles (name, age, religion, location, profile_image_id) 
#                        VALUES (?, ?, ?, ?, ?)''', (name, age, religion, location, profile_image_id))

# #Commit the changes
# conn.commit()
# # 
# # #Close the connection
# conn.close()

# event_names = [
#     "Conference on Artificial Intelligence",
#     "Music Festival 2024",
#     "Tech Expo & Hackathon",
#     "International Film Festival",
#     "Food and Wine Tasting Event",
#     "Charity Gala Dinner",
#     "Fitness Marathon",
#     "Business Networking Summit",
#     "Cultural Diversity Celebration",
#     "Science Fair and Exhibition"
# ]

# date_strings = [
#     '20-02-2025',
#     '15-05-2024',
#     '25-03-2024',
#     '06-10-2024',
#     '11-08-2024',
#     '28-07-2024',
#     '28-01-2025',
#     '10-04-2024',
#     '24-08-2024',
#     '12-06-2024'
# ]

# conn = sqlite3.connect('brohub.db')
# cursor = conn.cursor()


# for i in range(len(event_names)):
#     name = event_names[i]
#     num_applied = random.randint(20, 100)
#     date = date_strings[i]
#     profile_image_id = random.randint(1, 5)
#     cursor.execute(f'''INSERT INTO events(name, date, num_applied, cover_photo_id) 
#                        VALUES (?, ?, ?, ?)''', (name, date, num_applied, profile_image_id ))

# # Commit the changes
# conn.commit()

# # Close the connection
# conn.close()

# group_names = [
#     "Tech Enthusiasts",
#     "Creative Minds",
#     "Fitness Freaks",
#     "Food Lovers Club",
#     "Adventure Seekers",
#     "Bookworms Society",
#     "Music Enthusiasts",
#     "Artistic Souls",
#     "Travel Explorers",
#     "Entrepreneurial Minds"
# ]

# male_group_mottos = [
#     "Brothers in Arms, United in Strength",
#     "Empowering Men to Achieve Greatness",
#     "Forge Bonds, Build Brotherhood",
#     "Embrace Masculinity, Embody Resilience",
#     "Unleash Your Potential, Be a Man of Valor",
#     "Rise Together, Conquer Challenges",
#     "Stronger Together, Men of Honor",
#     "Inspiring Men to Lead with Integrity",
#     "Courage, Camaraderie, Confidence",
#     "Fostering Growth, Nurturing Brotherhood"
# ]

# conn = sqlite3.connect('brohub.db')
# cursor = conn.cursor()


# for i in range(len(group_names)):
#     name = group_names[i]
#     members = random.randint(20, 100)
#     motto = male_group_mottos[i]
#     profile_image_id = random.randint(1, 5)
#     cursor.execute(f'''INSERT INTO groups(name, members, motto, profile_image_id) 
#                        VALUES (?, ?, ?, ?)''', (name, members, motto, profile_image_id ))

# # Commit the changes
# conn.commit()

# # Close the connection
# conn.close()

# create the fake posts
# conn = sqlite3.connect('brohub.db')
# cursor = conn.cursor()

# post_names_and_descriptions = [
# ("The Art of Storytelling", "Explore the captivating world of storytelling and learn techniques to craft engaging narratives that captivate your audience."),
# ("Embracing Minimalism", "Discover the freedom and joy of living with less. Embrace a minimalist lifestyle and declutter your physical and mental space."),
# ("Unraveling the Mysteries of the Universe", "Join us on a journey through the cosmos as we explore the mind-bending mysteries of the universe and the latest scientific discoveries."),
# ("Culinary Adventures Around the World", "Embark on a delectable culinary adventure and explore the diverse flavors and cuisines from around the globe."),
# ("Tech Innovations Shaping Our Future", "Stay ahead of the curve with the latest tech innovations poised to revolutionize the way we live, work, and play."),
# ("Exploring the Depths of the Human Mind", "Dive into the fascinating world of psychology and uncover the mysteries of the human mind, emotions, and behavior."),
# ("Nature's Hidden Wonders", "Discover the breathtaking beauty and incredible wonders that nature has to offer, from stunning landscapes to intriguing wildlife."),
# ("The Power of Positive Thinking", "Learn how to harness the power of positive thinking and cultivate a mindset that attracts abundance, happiness, and success."),
# ("Unleashing Your Creative Potential", "Unlock your inner creativity and explore strategies and techniques to ignite your imagination and bring your ideas to life."),
# ("Mastering the Art of Time Management", "Gain control over your time and learn effective time management strategies to boost productivity and achieve your goals.")
# ]

# for i in range(len(post_names_and_descriptions)):
#     name = post_names_and_descriptions[i][0]
#     description = post_names_and_descriptions[i][1]
#     people_liked = random.randint(10,100)
#     group_name = "Bro Hood"
#     profile_image_id = random.randint(1, 5)
#     cursor.execute(f'''INSERT INTO posts(name, description, people_liked,group_name, image_id) 
#                        VALUES (?, ?, ?, ?,?)''', (name, description,people_liked, group_name, profile_image_id ))

# # Commit the changes
# conn.commit()

# # Close the connection
# conn.close()

#create  fake hobbies

# men_hobbies = [
# "Fishing",
# "Woodworking",
# "Cycling",
# "Golfing",
# "Hunting",
# "Home Brewing",
# "Grilling and Barbecuing",
# "Watching Sports",
# "Hiking and Camping",
# "Automotive Restoration"
# ]

# conn = sqlite3.connect('brohub.db')
# cursor = conn.cursor()
# for i in  range(10):
#     x = 3
#     for j in range(x):
#         hobby = random.choice(men_hobbies)
#         cursor.execute('''INSERT OR IGNORE INTO hobbies(id, hobby) values (?,?)''', (i,hobby))


# # Commit the changes
# conn.commit()

# # Close the connection
# conn.close()

