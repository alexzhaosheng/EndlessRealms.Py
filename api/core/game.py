from .definitions import IGame
from .world import World
from .context import Context

class Game(IGame):
    context: Context
    def __init__(self, context: Context):
        self.context = context
        self.game = self
        self.world = World()
        self.setupSystemCommandInterface()

    def setupSystemCommandInterface(self):
        print("Enable system command")


