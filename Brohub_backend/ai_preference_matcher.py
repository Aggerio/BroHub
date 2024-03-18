import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.layers import Embedding, LSTM, Dense
from tensorflow.keras.models import Sequential
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np

hobby_encoder = keras.layers.StringLookup()
hobby_encoder.adapt(tf.concat([tf.ragged.constant(user_hobbies).flat_values], axis=0))
group_encoder = keras.layers.StringLookup()
group_encoder.adapt(tf.concat([tf.ragged.constant(user_groups).flat_values], axis=0))

max_hobbies = max(len(hobbies) for hobbies in user_hobbies)
max_groups = max(len(groups) for groups in user_groups)

user_hobby_sequences = pad_sequences(
    [hobby_encoder(hobbies) for hobbies in user_hobbies],
    maxlen=max_hobbies,
    padding='post',
    truncating='post'
)
user_group_sequences = pad_sequences(
    [group_encoder(groups) for groups in user_groups],
    maxlen=max_groups,
    padding='post',
    truncating='post'
)

model = Sequential([
    Embedding(len(hobby_encoder.vocab) + 1, 64, mask_zero=True, input_length=max_hobbies),
    LSTM(64),
    Embedding(len(group_encoder.vocab) + 1, 64, mask_zero=True, input_length=max_groups),
    LSTM(64),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

X_hobby = user_hobby_sequences
X_group = user_group_sequences
y = np.array([[friendship[0], friendship[1]] in friendships for friendship in friendships])

model.fit([X_hobby, X_group], y, epochs=10, batch_size=32)

def recommend_friends(user_id, num_recommendations=5):
    user_idx = user_data.index(user_id)
    user_hobbies = user_hobby_sequences[user_idx]
    user_groups = user_group_sequences[user_idx]
    
    friendship_scores = model.predict([np.expand_dims(user_hobbies, axis=0), np.expand_dims(user_groups, axis=0)])
    
    sorted_users = sorted(enumerate(friendship_scores[0]), key=lambda x: x[1], reverse=True)
    recommended_users = [user_data[idx] for idx, _ in sorted_users[1:num_recommendations+1]]
    
    return recommended_users