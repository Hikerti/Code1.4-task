import { Box, Typography, TextField, Button } from "@mui/material";
import CardPosts from "../Card/CardPost.jsx";
import classes from '../SectionFirst/SectionFirst.module.scss'
import { useState } from "react";

export default function SectionSecond() {

    const [countPost, setCountPost] = useState(10);
    const [countValue, setCountValue] = useState(10);

    const handleChangeCount = (event) => {
        let value = parseInt(event.target.value);
        if (isNaN(value) || value <= 0) {
            value = 10; 
        }
        setCountValue(value)
    }
    const clickCount = () => {
        setCountPost(countValue)
    }
    return (
        <>  
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>    
                <Typography variant="h2" color="initial">Post</Typography>
                <Typography variant="p" color="initial">Posts from out users</Typography>
            </Box> 
            <Box sx={{display: 'flex', flexDirection: 'column' , gap: '20px'}}>                
                <TextField sx={{border: '1px solid rgb(148, 160, 184, 0.4)'}} id="outlined-basic" type="number" label="Введи число постов" variant="filled" onChange={handleChangeCount}></TextField>
                <Button variant="contained" onClick={() => clickCount()}>Применить</Button>
            </Box>    
        </Box> 
            <Box sx={{width: '100%', gap: '20px', display: 'flex', flexDirection: 'column'}} className={classes.grid__container}>
                <CardPosts countPost={countPost}></CardPosts>
            </Box>
        </>
    )
}