import create from 'zustand';
import { initialize as initServer, saveApiKey} from './network';
import { GameStatus } from './types';

interface StoreState {
  gameStatus: GameStatus;
  setGameStatus: (status:GameStatus) => void;  
  error?: any;  

  saveApiKey: (key:string) => void;  
}

async function initialize(set: 
  (partial: StoreState | Partial<StoreState> |((state:StoreState) => StoreState | Partial<StoreState>), replace?:boolean | undefined) => void): Promise<GameStatus>{
  try{
    var d = await initServer();
    set({gameStatus: d});
    return d;
  }
  catch(err){
    set({gameStatus: "Error", error: err});    
    return "Error"
  }
}

export const useStore = create<StoreState>(  
    (set) =>{
      initialize(set);
      return ({
      gameStatus: "Initializing",
      setGameStatus: (newStatus) => set({ gameStatus: newStatus }),
      saveApiKey: async (key) =>{
        await saveApiKey(key);
        await initialize(set);
      }
    })    
  }
);
