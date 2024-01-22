import os
import psycopg2
from PIL import Image

# Database connection parameters
db_params = {
    "host": "localhost",
    "database": "article_dataset",
    "user": "postgres",
    "password": "",
}

# Folder containing images
image_folder = "/Users/preet/Documents/College/capstone-project/flask-server/database/tshirt"

# Connect to the PostgreSQL database
conn = psycopg2.connect(**db_params)
cursor = conn.cursor()

# Iterate over the files in the image folder
for filename in os.listdir(image_folder):
    # Adjust extensions as needed
    if filename.endswith(".jpg") or filename.endswith(".png"):
        article_id = int(os.path.splitext(filename)[0])
        image_path = os.path.join(image_folder, filename)

        # Open and read the image file
        with open(image_path, "rb") as image_file:
            image_data = image_file.read()

        # Insert the image data into the database
        cursor.execute(
            "INSERT INTO tshirt (article_id, image_data) VALUES (%s, %s)",
            (article_id, psycopg2.Binary(image_data))
        )
        conn.commit()

# Close the database connection
conn.close()
