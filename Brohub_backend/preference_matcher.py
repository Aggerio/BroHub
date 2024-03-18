
import sqlite3


#Port the social network graph algo for the friends

# return a list of possible people that he can be friends with

def recommend_friends(user_id):
    conn = sqlite3.connect('brohub.db')
    cursor = conn.cursor()

    # Get the user's hobbies
    cursor.execute("SELECT hobby FROM hobbies WHERE id = ?", (user_id,))
    user_hobbies = [row[0] for row in cursor.fetchall()]

    # Get the user's groups
    cursor.execute("SELECT group_name FROM involved_groups WHERE id = ?", (user_id,))
    user_groups = [row[0] for row in cursor.fetchall()]

    # Find users with shared hobbies
    shared_hobbies_query = """
        SELECT p.id, p.name
        FROM profiles p
        INNER JOIN hobbies h ON p.id = h.id
        WHERE h.hobby IN ({}) AND p.id != ?
        GROUP BY p.id
        ORDER BY COUNT(h.hobby) DESC
    """.format(','.join('?' * len(user_hobbies)))
    cursor.execute(shared_hobbies_query, user_hobbies + [user_id])
    shared_hobbies_users = cursor.fetchall()

    # Find users in the same groups
    shared_groups_query = """
        SELECT p.id, p.name
        FROM profiles p
        INNER JOIN involved_groups g ON p.id = g.id
        WHERE g.group_name IN ({}) AND p.id != ?
        GROUP BY p.id
        ORDER BY COUNT(g.group_name) DESC
    """.format(','.join('?' * len(user_groups)))
    cursor.execute(shared_groups_query, user_groups + [user_id])
    shared_groups_users = cursor.fetchall()

    # Combine the results and remove duplicates
    friend_recommendations = list(set(shared_hobbies_users + shared_groups_users))

    conn.close()
    return friend_recommendations

# Example usage
# user_id = 1
# recommended_friends = recommend_friends(user_id)
# print(f"Recommended friends for user {user_id}:")
# for friend in recommended_friends:
#     print(f"ID: {friend[0]}, Name: {friend[1]}")