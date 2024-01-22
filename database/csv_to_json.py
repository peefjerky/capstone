import csv
import json

with open('database/CapstonePreprocessDF.csv', 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    data = [row for row in csv_reader]

json_data = json.dumps(data, indent=4)

with open('json_dataset.json', 'w') as json_file:
    json_file.write(json_data)
