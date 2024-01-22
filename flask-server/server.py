from flask import Flask, jsonify
import json
import subprocess
import time

from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Run CNN_MNIST.py first
subprocess.run(["python", "CNN_MNIST.py"])

# Allow some time for CNN_MNIST.py to complete and save the data
time.sleep(5)  # Adjust the sleep duration as needed

# Load the sample data from the text file
sample_data = []
with open("sample_data.txt", "r") as file:
    for line in file:
        item = json.loads(line.strip())  # Ensure it's a valid JSON string
        sample_data.append(json.loads(line.strip()))

# Endpoint to get the data in JSON format


@app.route("/get_output_json")
def get_output_json():
    filtered_data = [item for item in sample_data if item]
    if filtered_data:
        return jsonify(output=filtered_data)
    else:
        return jsonify(error="No data available"), 404


if __name__ == "__main__":
    app.run()
