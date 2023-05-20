from typing import Optional
from .definitions import Setting, IGame, IWorld

class Context:
    setting: Setting
    game: Optional[IGame] = None
    world: Optional[IWorld] = None

    def __init__(self, setting: Setting):
        self.setting = setting