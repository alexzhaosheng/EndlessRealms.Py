import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useStore } from "../store"

interface ApiKeyProp{
    initialKey: string;    
}
export function ApiKey({
    initialKey    
}:ApiKeyProp){
    const {saveApiKey} = useStore();
    const [key, setKey]= useState(initialKey);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setKey(event.target.value);    
    }
    const saveKey = async () => {        
        if(!key?.trim()){
            setErrorMessage("Invalid key");
            return;
        }
        else{
            setErrorMessage(null)
        }
        setIsLoading(true);
        try{
            await saveApiKey(key);            
        }
        catch(err:any){
            setErrorMessage(err.message);
        }
        setIsLoading(false);
    }

    return(
    <Box
        sx={{
            width:"100%",
            height:"70vh",
            display: "flex",
            justifyContent: 'center',
            alignItems:'center'
        }}
    >
        <Box>
            <p>
                <h3>Setup API Key</h3>
                Get your Open AI API key from here: <a href="https://platform.openai.com/account/api-keys">https://platform.openai.com/account/api-keys</a>
            </p>
            <TextField                 
                label="Open AI Api Key"                 
                value={key}   
                fullWidth = {true}             
                error = {errorMessage ? true : false}
                helperText = {errorMessage}
                onChange={handleChange}/>    
            <Box sx={{marginTop:"10px"}}>
            {!isLoading && (
                <Button  
                    variant="contained"                 
                    onClick={saveKey}                    
                >Save</Button>
            )}
            {isLoading && (<CircularProgress/>)}          
            </Box>     
        </Box>
    </Box>
    )
}