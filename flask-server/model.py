from flask import Flask, request, jsonify
from keras.preprocessing.image import img_to_array, load_img
from keras.models import load_model
import os
import requests  # Import the requests library
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Set the upload folder path
UPLOAD_FOLDER = "uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# Define the URL to which you want to post the prediction
FRONTEND_URL = "http://localhost:5173"  # Replace with your frontend URL


@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No file part"})

    image = request.files["image"]

    if image.filename == "":
        return jsonify({"error": "No selected file"})

    # Save the uploaded image to the server
    image_path = os.path.join(app.config["UPLOAD_FOLDER"], image.filename)
    image.save(image_path)

    # Process the image using your Keras model
    img = load_image(image_path)
    model = load_model('clothing_classification_model.h5')
    class_probabilities = model.predict(img)
    class_prediction = class_probabilities.argmax()

    # Map apparel category with the numerical class
    products = ["T-shirt", "Trousers", "Sweater", "Dress",
                "Dress", "Sandal", "Shirt", "Sneaker", "Boots"]
    product = products[class_prediction]

    # Post the prediction to the frontend URL
    post_data = {"product": product}
    response = requests.post(FRONTEND_URL, json=post_data)

    return jsonify({"product": product})


def load_image(image_path):
    # Load the image using the provided path
    img = load_img(image_path, grayscale=True, target_size=(28, 28))
    img = img_to_array(img)
    img = img.reshape(1, 28, 28, 1)
    img = img.astype('float32')
    img = img / 255.0
    return img


if __name__ == "__main__":
    app.run(debug=True, port=5001)
