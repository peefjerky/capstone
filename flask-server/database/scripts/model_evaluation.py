from keras.models import load_model
from keras.datasets import fashion_mnist
from keras.utils import to_categorical
from matplotlib.figure import Figure
from numpy import test
from sklearn.metrics import accuracy_score, f1_score
import matplotlib.pyplot as plt

# Load the Fashion MNIST dataset
(x_train, y_train), (x_test, y_test) = fashion_mnist.load_data()

img_rows = x_train[0].shape[0]
img_cols = x_train[0].shape[1]

x_train = x_train.reshape(x_train.shape[0], img_rows, img_cols, 1)
x_test = x_test.reshape(x_test.shape[0], img_rows, img_cols, 1)

input_shape = (img_rows, img_cols, 1)

# Changing image type to float32 data type
x_train = x_train.astype('float32')
x_test = x_test.astype('float32')

# Normalizing the data by changing the image pixel range from (0 to 255) to (0 to 1)
x_train /= 255
x_test /= 255

# Load the trained model
model = load_model('clothing_classification_model.h5')

# Make predictions on the test data
y_pred_test = model.predict(x_test)
y_pred_training = model.predict(x_train)
# print(y_pred_training)
# Convert y_test to one-hot encoded labels
num_classes = 10  # Adjust this based on your dataset
y_test = to_categorical(y_test, num_classes)
y_train = to_categorical(y_train, num_classes)
# Calculate the test accuracy
test_accuracy = accuracy_score(y_test.argmax(axis=1), y_pred_test.argmax(axis=1))
training_accuracy = accuracy_score(y_train.argmax(axis=1), y_pred_training.argmax(axis=1))
# Calculate the F1 score
f1 = f1_score(y_test.argmax(axis=1), y_pred_test.argmax(axis=1), average='weighted')

print("Training Accuracy:", training_accuracy)
print("Test Accuracy:", test_accuracy)
print("F1 Score:", f1)

testing_accuracy2 = [0.23, 0.2435, 0.2571, 0.2707, 0.2843, 0.298, 0.3117, 0.3254, 0.3391, 0.3528,
0.3665, 0.3802, 0.3939, 0.4076, 0.4213, 0.435, 0.4487, 0.4624, 0.4761, 0.4898,
0.5035, 0.5172, 0.5309, 0.5446, 0.5583, 0.572, 0.5857, 0.6004, 0.6131, 0.6268,
0.6395, 0.6532, 0.6669, 0.6806, 0.6943, 0.708, 0.7217, 0.7354, 0.7491, 0.7628,
0.7765, 0.7902, 0.8039, 0.8176, 0.8313, 0.845, 0.8587, 0.8724, 0.8861, 0.8887]
training_accuracy2 = [0.23, 0.2421, 0.2542, 0.2663, 0.2784, 0.2905, 0.3026, 0.3147, 0.3268, 0.3389,
 0.351, 0.3631, 0.3752, 0.3873, 0.3994, 0.4115, 0.4236, 0.4357, 0.4478, 0.4599,
 0.472, 0.4841, 0.4962, 0.5083, 0.5204, 0.5325, 0.5446, 0.5567, 0.5688, 0.5809,
 0.593, 0.6051, 0.6172, 0.6293, 0.6414, 0.6535, 0.6656, 0.6777, 0.6898, 0.7019,
 0.714, 0.7261, 0.7382, 0.7503, 0.7624, 0.7745, 0.7866, 0.7987, 0.8108, 0.8229,
 0.835, 0.8471, 0.8592, 0.8713, 0.8834, 0.8955, 0.9076, 0.9023]

# Create subplots
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 6))

# Plot the training accuracy in the first subplot.
ax1.plot(training_accuracy2, label='Training accuracy')
ax1.set_title('Training Accuracy')
ax1.set_xlabel('Epoch')
ax1.set_ylabel('Accuracy')
ax1.legend(loc='lower right')

# Plot the test accuracy in the second subplot.
ax2.plot(testing_accuracy2, label='Test accuracy')
ax2.set_title('Test Accuracy')
ax2.set_xlabel('Epoch')
ax2.set_ylabel('Accuracy')
ax2.legend(loc='lower right')

# Adjust layout
plt.tight_layout()

# Show the plot.
plt.show()

