import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

export function SetLanguage(){
    const [errorMessage, setErrorMessage] = useState<string|null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput]= useState("");
    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)
    };
    const submitInput = ()=>{
        if(input?.trim() && input?.trim().length < 10){
            setErrorMessage("Input more text please");            
        }
        else{
            setErrorMessage(null)
            setIsLoading(true);
        }
    }
    return (
        <Box
            sx={{
                width:"100%",
                height:"70vh",
                display: "flex",
                justifyContent: 'center',
                alignItems:'center'
            }}
        >        
            <Box sx={{width:800}}>
            <p>Hello, please say a sentence in your language to me, and from then on, I will generate the world in your language. Please don't make it too short to avoid me mistaking your language.</p>
            <TextField
                label="Type something"
                fullWidth = {true}
                value={input}
                error = {errorMessage ? true : false}
                helperText = {errorMessage}
                onChange={handleChange}
            ></TextField>
            <Box sx={{marginTop:"10px"}}>
                {!isLoading && (
                    <Button  
                        variant="contained"                 
                        onClick={submitInput}                    
                    >Save</Button>
                )}
                {isLoading && (<CircularProgress/>)}          
            </Box>   
            </Box>
        </Box>
    );
}