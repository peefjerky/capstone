# -*- coding: utf-8 -*-
"""CapstoneModel.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1_NwKo1YIhDWKF6zMxChtTdkE9helnFak
"""

import ssl
import tensorflow as tf
import json
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import requests
requests.packages.urllib3.disable_warnings()

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    # Legacy Python that doesn't verify HTTPS certificates by default
    pass
else:
    # Handle target environment that doesn't support HTTPS verification
    ssl._create_default_https_context = _create_unverified_https_context

# plt.rcParams['figure.figsize'] = (16, 10)
# plt.rc('font', size=15)

(X_train, y_train), (X_test, y_test) = tf.keras.datasets.fashion_mnist.load_data()
print(X_train[0])
print(y_train[0])
print(X_train.shape)
print(y_train.shape)

X_train = X_train / 255.
X_train = X_train.reshape([-1, 28*28])
X_train = X_train.astype(np.float32)
y_train = y_train.astype(np.int32)

X_test = X_test / 255.
X_test = X_test.reshape([-1, 28*28])
X_test = X_test.astype(np.float32)
y_test = y_test.astype(np.int32)

# Train_dataset
train_ds = tf.data.Dataset.from_tensor_slices((X_train, y_train))\
    .shuffle(buffer_size=len(X_train))\
    .batch(batch_size=128)\
    .prefetch(buffer_size=128)\
    .repeat()

# Test dataset
test_ds = tf.data.Dataset.from_tensor_slices((X_test, y_test))\
            .batch(batch_size=128)\
            .prefetch(buffer_size=128)\
            .repeat()

labels_map = {0: 'T-Shirt', 1: 'Trouser', 2: 'Pullover', 3: 'Dress', 4: 'Coat',
              5: 'Sandal', 6: 'Shirt', 7: 'Sneaker', 8: 'Bag', 9: 'Ankle Boot'}
columns = 5
rows = 5
# fig = plt.figure(figsize=(8, 8))

for i in range(1, columns * rows+1):
    data_idx = np.random.randint(len(X_train))
    img = X_train[data_idx].reshape([28, 28])
    label = labels_map[y_train[data_idx]]

    # fig.add_subplot(rows, columns, i)
#     plt.title(label)
#     plt.imshow(img, cmap='gray')
#     plt.axis('off')
# plt.tight_layout()
# plt.show()

# Build Sequential Model
model = tf.keras.Sequential(name='nn')

model.add(tf.keras.layers.Dense(256, input_shape=(28*28, )))
model.add(tf.keras.layers.BatchNormalization())
model.add(tf.keras.layers.ReLU())
model.add(tf.keras.layers.Dense(10, activation='softmax'))

model.summary()

# Model compile
model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.01),
              loss=tf.keras.losses.SparseCategoricalCrossentropy(),
              metrics=['accuracy'])

model.fit(train_ds, batch_size=128,
          steps_per_epoch=len(X_train)/128, epochs=10)


# -----------------------------x-----------------------------x-----------------------------

loss, acc = model.evaluate(test_ds, steps=len(X_test)/128)
print('test loss is {}'.format(loss))
print('test accuracy is {}'.format(acc))

test_batch_size = 10
batch_index = np.random.choice(
    len(X_test), size=test_batch_size, replace=False)

batch_xs = X_test[batch_index]
batch_ys = y_test[batch_index]
y_pred_ = model(batch_xs, training=False)

print(y_pred_)

# fig = plt.figure(figsize=(10, 10))
# for i, (px, py, y_pred) in enumerate(zip(batch_xs, batch_ys, y_pred_)):
#     p = fig.add_subplot(5, 5, i+1)
#     if np.argmax(y_pred) == py:
#         p.set_title("{}".format(labels_map[py]), color='blue')
#     else:
#         p.set_title("{}/{}".format(labels_map[np.argmax(y_pred)],
#                                labels_map[py]), color='red')
#     p.imshow(px.reshape(28, 28))
#     p.axis('off')
# plt.tight_layout()


# fig = plt.figure(figsize=(10, 10))
# Create an empty list to store the results
model.save("trained_model.h5")
# Create an empty list to store the results
sample_data = []

# Populate sample_data with the data you want to display
for i, (px, py, y_pred) in enumerate(zip(batch_xs, batch_ys, y_pred_)):
    result = {}
    if np.argmax(y_pred) == py:
        result["label"] = labels_map[py]
    # else:
    #     result["predicted_label"] = labels_map[np.argmax(y_pred)]
    #     result["actual_label"] = labels_map[py]

    sample_data.append(result)

# Save sample_data to a text file
with open("sample_data.txt", "w") as file:
    for item in sample_data:
        file.write(json.dumps(item) + "\n")
# ... (your existing code)


# ! +++++++++++++===============Save the trained model===============+++++++++++++
