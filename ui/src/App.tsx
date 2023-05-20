import {Box, Tabs, Tab, CircularProgress} from '@mui/material';
import { useStore } from './store';
import { useState } from 'react';
import { NewWorld } from './components/NewWorld'
import { ApiKey } from './components/ApiKey'
import { SetLanguage } from './components/SetLanguage';


function App() {
  const { gameStatus, error } = useStore();
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (ev: React.SyntheticEvent, newIndex: number)=>{
    setTabIndex(newIndex);
  };
  
  switch(gameStatus){
    case 'Initializing':
      return(
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
          <CircularProgress />
        </Box>
        );    
    case "NoLanguage":
      return <SetLanguage></SetLanguage>
    case 'NoWorld':
      return <NewWorld/>;
    case "MissingKey":
      return <ApiKey initialKey=''/>;
    case "Ready":
      return(
      <Box sx={{width:"100%"}}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Game" id="gameTab" />          
            <Tab label="Setting" id="settingTab" />
          </Tabs>          
        </Box>
        <Box></Box>
      </Box>      
    );
    case "Error":
      return (
        <Box>{error?.message}</Box>
      );
    default:
      return <></>    
 }  
}

export default App;
