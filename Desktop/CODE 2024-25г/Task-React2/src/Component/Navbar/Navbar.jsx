import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import BackHandIcon from '@mui/icons-material/BackHand';
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import { Button } from '@mui/material'
import { styled } from "@mui/material/styles";
import {Link, useNavigate} from "react-router-dom";

export default function Navbar() {
    const CustomSwitch = styled(Switch)(({ theme }) => ({
        "& .MuiSwitch-switchBase": {
          color: "rgba(148, 160, 184, 0.4)", 
          "&.Mui-checked": {
            color: "rgba(38, 62, 193)",
          },
        },
        "& .MuiSwitch-track": {
          backgroundColor: "rgba(148, 160, 184, 0.4)", 
          opacity: 1,
          transition: theme.transitions.create(["background-color"], {
            duration: 300,
          }),
        },
        "& .Mui-checked + .MuiSwitch-track": {
          backgroundColor: "rgba(18, 62, 255)", 
        },
      }));

    return (
        <Toolbar className='flex items-center justify-between'>
            <Box className='flex items-center justify-center gap-[20px] ml-[30px]'>
                <IconButton 
                    size="large"
                    edge="start"
                    color="inherit" 
                    aria-label=""
                >
                    <Link to='/'><BackHandIcon /></Link>
                </IconButton>
                <Typography variant="h5">
                    My second task 
                </Typography>
                
                    <Button variant="text" color='white' className='hover__Button'><Link to='/posts'>Posts</Link></Button>
                    <Button variant="text" color='white' className='hover__Button'><Link to='/'>Testimonials</Link></Button>
                    <Button variant="text" color='white' className='hover__Button'>Highlight</Button>
                    <Button variant="text" color='white' className='hover__Button'>Pricing</Button>
                </Box>
            <Box className='flex items-center justify-center gap-[20px] ml-[30px]'>
                <CustomSwitch/>
                <Button variant="contained" sx={{bgcolor: 'black', border: "2px solid rgb(148, 160, 184, 0.4)", borderRadius: '10px'}} className='hover__Button'>Sing in</Button>
                <Button variant="contained" sx={{bgcolor: 'rgba(38, 62, 193)', borderRadius: '10px'}} className='hover__Button' color='primary'>Sing up</Button>
            </Box>
          </Toolbar>
    )
}