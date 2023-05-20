from flask import Flask, g, jsonify
from flask_expects_json import expects_json
from typing import Literal
from .core.context import Context
from .core.game_starter import start_game
from .core.persist import loadSetting, saveSetting

GameStatus = Literal['Initializing', 'Error', 'MissingKey', 'NoLanguage', 'NoWorld', 'Ready', 'Running']


save_key_schema = {
    "type":'object',
    "properties": {
        "key":{"type":"string"}
    },
    "required":["key"]
}

context: Context
def start_api(app: Flask):
    @app.route('/api/initialize', methods=["POST"])
    def initialize():
        setting = loadSetting()
        if setting.open_api_key is None:
            return 'MissingKey'
        if setting.language is None:
            return "NoLanguage"
        start_game(setting)
        return 'Ready'
    
    @app.route('/api/apikey', methods=["PUT"])
    @expects_json(save_key_schema)
    def saveApiKey():
        req = g.data
        print("save key:" + req["key"])
        setting = loadSetting()
        setting.open_api_key = req["key"]
        saveSetting(setting)
        return '', 200
	    


