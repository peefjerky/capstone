from flask import Flask, Response, json
import psycopg2
import base64
import json
from typing import Any
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173/*"}})  # Adjust the origin URL as needed
# Database configuration
db_connection = psycopg2.connect(
    database="article_dataset",
    user="postgres",
    password="",
    host="localhost",
    port="5432"
)

class ModelEncoder(json.JSONEncoder):
    def default(self, o: Any) -> Any:
        if hasattr(o, 'to_json'):
            return o.to_json()
        else:
            return super(ModelEncoder, self).default(o)


app.json_encoder = ModelEncoder


@app.route('/api/get_data', methods=['GET'])
def get_data():
    cursor = db_connection.cursor()
    cursor.execute("""SELECT * FROM article;""")
    data = cursor.fetchall()
    cursor.close()

    results = []
    for row in data:
        result_item = {
            'id': row[0],
            'product_type': row[1],
            'color': row[2],
            'gender': row[3],
            'description': row[4],
            'image_data': base64.b64encode(row[5]).decode('utf-8')
            # Ensure row[5] is the binary image data, and convert it to base64
            # Add more columns as needed
        }
        results.append(result_item)

    return Response(json.dumps(results), content_type='application/json')


if __name__ == '__main__':
    app.run(debug=True)
