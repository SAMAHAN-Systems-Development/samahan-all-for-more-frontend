import json
import re

# Load JSON data from a file
filename = 'profileCardData.json'
with open(filename, 'r') as file:
    data = json.load(file)

# Modify the JSON content
for k, v in data.items():
    for p in v:
        p['fileName'] = p['fileName'].replace(' ', '_')
        p['fileName'] = re.sub(r'[^a-zA-Z0-9._-]', '', p['fileName'])


with open(filename, 'w') as file:
    json.dump(data, file, indent=2)

print("JSON data has been modified and saved to output.json")
