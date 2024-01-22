from keras.preprocessing.image import img_to_array
from keras.preprocessing.image import load_img
from keras.models import load_model
from keras import backend as K
from keras.layers import Conv2D, MaxPooling2D, BatchNormalization
from keras.layers import Dense, Dropout, Flatten
from keras.models import Sequential
from keras.utils import to_categorical
from tensorflow import keras
import matplotlib.pyplot as plt
import numpy as np
from keras.datasets import fashion_mnist

# Load fashion MNIST dataset
(x_train, y_train), (x_test, y_test) = fashion_mnist.load_data()

# Explore the dataset
# Check the shape and size of x_train, x_test, y_train, y_test
print("Number of samples/observations in training data: " + str(len(x_train)))
print("Number of labels in training data: " + str(len(y_train)))
print("Dimensions of a single image in x_train:" + str(x_train[0].shape))
print("-------------------------------------------------------------")
print("Number of samples/observations in test data: " + str(len(x_test)))
print("Number of labels in test data: " + str(len(y_test)))
print("Dimensions of single image in x_test:" + str(x_test[0].shape))

"""### View sample images"""

# Visualization library to visualize images

# Plotting 5 images, Subplot arugments represent nrows, ncols and index
# Color map is set to grey since our image dataset is grayscale
# plt.subplot(231)
# random_num = np.random.randint(0, len(x_train))
# plt.imshow(x_train[random_num], cmap=plt.get_cmap('gray'))

# plt.subplot(232)
# random_num = np.random.randint(0, len(x_train))
# plt.imshow(x_train[random_num], cmap=plt.get_cmap('gray'))

# plt.subplot(233)
# random_num = np.random.randint(0, len(x_train))
# plt.imshow(x_train[random_num], cmap=plt.get_cmap('gray'))

# plt.subplot(234)
# random_num = np.random.randint(0, len(x_train))
# plt.imshow(x_train[random_num], cmap=plt.get_cmap('gray'))

# plt.subplot(235)
# random_num = np.random.randint(0, len(x_train))
# plt.imshow(x_train[random_num], cmap=plt.get_cmap('gray'))


# Visualize the images
# plt.show()

"""### Let's create our model"""

# Import necessary keras specific libraries

# Setting Training Parameters like batch_size, epochs
batch_size = 128
epochs = 100

# Storing the number of rows and columns
img_rows = x_train[0].shape[0]
img_cols = x_train[1].shape[0]

''' Getting the data in the right 'shape' as required by Keras i.e. adding a 4th
dimension to our data thereby changing the original image shape of (60000,28,28)
to (60000,28,28,1)'''
x_train = x_train.reshape(x_train.shape[0], img_rows, img_cols, 1)
x_test = x_test.reshape(x_test.shape[0], img_rows, img_cols, 1)

# Storing the shape of a single image
input_shape = (img_rows, img_cols, 1)

# Changing image type to float32 data type
x_train = x_train.astype('float32')
x_test = x_test.astype('float32')

# Normalizing the data by changing the image pixel range from (0 to 255) to (0 to 1)
x_train /= 255
x_test /= 255

# Performing one hot encoding

num_classes = 10

y_train = to_categorical(y_train, num_classes)
y_test = to_categorical(y_test, num_classes)

# Calculate the number of classes and number of pixels
num_classes = y_test.shape[1]
num_pixels = x_train.shape[1] * x_train.shape[2]

# Create CNN model
model = Sequential()

model.add(Conv2D(32, kernel_size=(3, 3),
                 activation='relu',
                 input_shape=input_shape))
model.add(BatchNormalization())

model.add(Conv2D(64, (3, 3), activation='relu'))
model.add(BatchNormalization())

model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))

model.add(Flatten())
model.add(Dense(128, activation='relu'))
model.add(BatchNormalization())

model.add(Dropout(0.5))
model.add(Dense(num_classes, activation='softmax'))

model.compile(loss='categorical_crossentropy',
              optimizer=keras.optimizers.Adadelta(),
              metrics=['accuracy'])

print(model.summary())

"""### Let's train our model"""

model_fitting = model.fit(x_train, y_train,
                          batch_size=batch_size,
                          epochs=epochs,
                          verbose=1,
                          validation_data=(x_test, y_test))

score = model.evaluate(x_test, y_test, verbose=0)
print('Test loss:', score[0])
print('Test accuracy:', score[1])


# Save the model with the name clothing_classification_model
model.save('clothing_classification_model.h5')
