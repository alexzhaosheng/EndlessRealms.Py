import os
import json
from .definitions import Setting

stateFolder = "./state"
if not os.path.exists(stateFolder):
    os.makedirs(stateFolder)

settingFile = os.path.join(stateFolder, "setting.json")

def loadSetting() -> Setting:
    if os.path.isfile(settingFile):
        with open(settingFile) as f:
            data = json.load(f)
        return Setting(data)
    else: 
        return Setting()

def saveSetting(setting: Setting):
    with open(settingFile, 'w') as f:            
        json.dump(setting.__dict__, f)        
