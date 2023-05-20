from .definitions import Setting
from .context import Context
from .game import Game
from .world import World

def start_game(setting: Setting) -> Context:
    if(context is None):
        context = Context(setting)
        Game(context)
        World(context)

    return context
    
