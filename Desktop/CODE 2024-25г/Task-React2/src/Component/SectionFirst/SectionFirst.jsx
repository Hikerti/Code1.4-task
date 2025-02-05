import {Box, Typography} from '@mui/material'
import classes from './SectionFirst.module.scss'
import CardUser from '../Card/CardUser.jsx'

export default function SectionFirst() {
    
    
 
    return (
        <>
            <Typography variant="h2" color="initial">Blog</Typography>
            <Typography variant="p" color="initial">Stay in the loop with the latest about our products</Typography>
            <Box sx={{justifyContent: 'center', gap: '20px'}} className={classes.grid__container}>
                <CardUser></CardUser>
            </Box>
        </>
    )
}