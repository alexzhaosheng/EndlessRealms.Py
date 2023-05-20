from abc import ABC

class Setting:
    open_api_key: str | None
    language: str | None
    def __init__(self, data = None):        
        self.open_api_key = None
        self.language = None
        if data is not None:
            self.__dict__ = data
    
class IGame(ABC):
    pass

class IWorld(ABC):
    pass
