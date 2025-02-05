import {Box} from '@mui/material'
import SectionFirst from '../SectionFirst/SectionFirst.jsx'
import SectionSecond from '../SectionSecond/SectionSecond.jsx'

export default function Main() {
    return (
        <Box sx={{width: '74%', marginLeft: '13%', display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '104px', gap: '20px' }}>
            <SectionSecond></SectionSecond>
            <SectionFirst></SectionFirst>
        </Box>
    )
}