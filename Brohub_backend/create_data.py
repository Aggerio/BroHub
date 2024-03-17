import sqlite3
import random

# 
conn = sqlite3.connect('brohub.db')
cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS profiles (
                    id INTEGER PRIMARY KEY,
                    name TEXT,
                    age INTEGER,
                    religion TEXT,
                    location TEXT,
                    profile_image_id INTEGER
                )''')
res = cursor.fetchall()
print("Res: ", res)
# 
# Groups 
cursor.execute("""CREATE TABLE IF NOT EXISTS groups(
               id INTEGER PRIMARY KEY,
               name TEXT,
               members INTEGER,
               motto TEXT,
               profile_image_id INTEGER
                )""")

res = cursor.fetchall()
print("Res: ", res)

# Hobbies 
cursor.execute("""CREATE TABLE IF NOT EXISTS hobbies(
               id INTEGER ,
               hobby TEXT
                )""")

res = cursor.fetchall()
print("Res: ", res)
# 
# involved_groups 
cursor.execute("""CREATE TABLE IF NOT EXISTS involved_groups(
               id INTEGER,
               group_name TEXT
                )""")

res = cursor.fetchall()
print("Res: ", res)
# 
# preferences
cursor.execute("""CREATE TABLE IF NOT EXISTS preferences(
               id INTEGER ,
               preference TEXT
                )""")

res = cursor.fetchall()
print("Res: ", res)
# posts 
cursor.execute("""CREATE TABLE IF NOT EXISTS posts(
                id INTEGER PRIMARY KEY,
               name TEXT,
               description TEXT,
               people_liked INTEGER,
               group_name TEXT
                )""")

res = cursor.fetchall()
print("Res: ", res)
# liked
cursor.execute("""CREATE TABLE IF NOT EXISTS liked(
                user_id INTEGER,
                post_id INTEGER
                )""")

res = cursor.fetchall()
print("Res: ", res)
# uploaded_images
cursor.execute("""CREATE TABLE IF NOT EXISTS liked(
                user_id INTEGER,
                image_id INTEGER
                )""")

res = cursor.fetchall()
print("Res: ", res)
# events 
cursor.execute("""CREATE TABLE IF NOT EXISTS events(
                id INTEGER PRIMARY KEY,
                name TEXT,
                date TEXT,
                num_applied TEXT,
                cover_photo_id INTEGER
                )""")

res = cursor.fetchall()
print("Res: ", res)
# events_applied
cursor.execute("""CREATE TABLE IF NOT EXISTS events_applied(
                user_id INTEGER,
                event_id INTEGER
                )""")

res = cursor.fetchall()
print("Res: ", res)

# Create the fake users, post, groups and events

#Create data for 10 users
male_names = [
    "James",
    "John",
    "Robert",
    "Michael",
    "William",
    "David",
    "Joseph",
    "Charles",
    "Thomas",
    "Daniel"
]
conn = sqlite3.connect('brohub.db')
cursor = conn.cursor()


for i in range(len(male_names)):
    name = male_names[i]
    age = random.randint(35, 70)
    religion = "Hindu"  # Assuming it's a constant value for all profiles
    location = "Vellore"  # Assuming it's a constant value for all profiles
    profile_image_id = random.randint(1, 5)
    cursor.execute(f'''INSERT INTO profiles (name, age, religion, location, profile_image_id) 
                       VALUES (?, ?, ?, ?, ?)''', (name, age, religion, location, profile_image_id))

#Commit the changes
conn.commit()
# 
# #Close the connection
conn.close()

event_names = [
    "Conference on Artificial Intelligence",
    "Music Festival 2024",
    "Tech Expo & Hackathon",
    "International Film Festival",
    "Food and Wine Tasting Event",
    "Charity Gala Dinner",
    "Fitness Marathon",
    "Business Networking Summit",
    "Cultural Diversity Celebration",
    "Science Fair and Exhibition"
]

date_strings = [
    '20-02-2025',
    '15-05-2024',
    '25-03-2024',
    '06-10-2024',
    '11-08-2024',
    '28-07-2024',
    '28-01-2025',
    '10-04-2024',
    '24-08-2024',
    '12-06-2024'
]

conn = sqlite3.connect('brohub.db')
cursor = conn.cursor()


for i in range(len(event_names)):
    name = event_names[i]
    num_applied = random.randint(20, 100)
    date = date_strings[i]
    profile_image_id = random.randint(1, 5)
    cursor.execute(f'''INSERT INTO events(name, date, num_applied, cover_photo_id) 
                       VALUES (?, ?, ?, ?)''', (name, date, num_applied, profile_image_id ))

# Commit the changes
conn.commit()

# Close the connection
conn.close()

group_names = [
    "Tech Enthusiasts",
    "Creative Minds",
    "Fitness Freaks",
    "Food Lovers Club",
    "Adventure Seekers",
    "Bookworms Society",
    "Music Enthusiasts",
    "Artistic Souls",
    "Travel Explorers",
    "Entrepreneurial Minds"
]

male_group_mottos = [
    "Brothers in Arms, United in Strength",
    "Empowering Men to Achieve Greatness",
    "Forge Bonds, Build Brotherhood",
    "Embrace Masculinity, Embody Resilience",
    "Unleash Your Potential, Be a Man of Valor",
    "Rise Together, Conquer Challenges",
    "Stronger Together, Men of Honor",
    "Inspiring Men to Lead with Integrity",
    "Courage, Camaraderie, Confidence",
    "Fostering Growth, Nurturing Brotherhood"
]

conn = sqlite3.connect('brohub.db')
cursor = conn.cursor()


for i in range(len(group_names)):
    name = group_names[i]
    members = random.randint(20, 100)
    motto = male_group_mottos[i]
    profile_image_id = random.randint(1, 5)
    cursor.execute(f'''INSERT INTO groups(name, members, motto, profile_image_id) 
                       VALUES (?, ?, ?, ?)''', (name, members, motto, profile_image_id ))

# Commit the changes
conn.commit()

# Close the connection
conn.close()