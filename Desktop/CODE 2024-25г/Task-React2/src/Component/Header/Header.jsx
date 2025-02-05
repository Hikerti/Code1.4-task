import AppBar from '@mui/material/AppBar'
import Navbar from '../Navbar/Navbar.jsx'
import './Header.scss'

export default function Header() {
    return (
        <AppBar position="fixed" sx={{bgcolor: 'inherit', backdropFilter: 'blur(15px)', width: '80%', borderRadius: "20px", marginTop: '20px', marginRight: '10%', border: "2px solid rgb(148, 160, 184, 0.4)", boxShadow: '0px 5px 5px 0px rgba(38, 62, 200, 0.2)'}}>
          <Navbar></Navbar>
        </AppBar>
    )
}