from .context import Context
from .definitions import IWorld

class World(IWorld):
    context: Context
    def __init__(self, context: Context):
        self.context = context
        self.context.world = self
        self.load()

    def load(self):
        print("load")