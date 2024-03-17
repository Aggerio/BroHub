import sqlite3

#Port the social network graph algo for the friends

# return a list of possible people that he can be friends with
def get_similar_preference(id: int) :
    conn = sqlite3.connect('brohub.db')
    cursor = conn.cursor()
    return []