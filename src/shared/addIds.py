#%%
import os
import pathlib
import json

currentPath = pathlib.Path(__file__).parent.absolute()
currentFile = "doucette-media.json"
newFile = "db.json"
currPath = os.path.join(currentPath, currentFile)
newPath = os.path.join(currentPath, newFile)

with open(currPath, 'r+', encoding='utf8') as f:
        data = json.load(f)
        for i in range(0, len(data)):
                data[i]['id'] = i

        json.dump(data, open(newPath, 'w', encoding='utf8'))
