import {CardMedia, Card, CardHeader, Avatar, Button, Box, Typography} from '@mui/material'
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function CardUser() {
    const navigate = useNavigate()

    const handelRedirect = () => {
        navigate('/');
    }
    const nowTime = Date()
    const [infoArr, setInfoArr] = useState([
        {id: 0, title: 'Тайлер Дырдын', subheader: nowTime, imgTitle: 'Тайлер', imgSrc: "/images/Тайлер.jpg", info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptates. Quaerat quas qui dolorum aspernatur sed et, delectus aut cupiditate, assumenda nobis inventore, ipsa atque sint. Soluta aut magnam molestiae saepe itaque atque eligendi culpa laudantium. Sint voluptate suscipit error placeat delectus itaque pariatur tenetur laudantium accusantium molestiae, vitae quia!'},
        {id: 1, title: 'Ким Чен Ын', subheader: nowTime, imgTitle: 'Ким', imgSrc: "/images/Ким.jpeg", info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptates. Quaerat quas qui dolorum aspernatur sed et, delectus aut cupiditate, assumenda nobis inventore, ipsa atque sint. Soluta aut magnam molestiae saepe itaque atque eligendi culpa laudantium. Sint voluptate suscipit error placeat delectus itaque pariatur tenetur laudantium accusantium molestiae, vitae quia!'},
        {id: 2, title: 'Илон Маск', subheader: "Кинул плотную", imgTitle: 'Маск', imgSrc: "/images/Маск.jpg", info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptates. Quaerat quas qui dolorum aspernatur sed et, delectus aut cupiditate, assumenda nobis inventore, ipsa atque sint. Soluta aut magnam molestiae saepe itaque atque eligendi culpa laudantium. Sint voluptate suscipit error placeat delectus itaque pariatur tenetur laudantium accusantium molestiae, vitae quia!'},
    ])

    function Deletepost(id) {
        const newArr = infoArr.filter((item) => item.id != id);
        setInfoArr([...newArr])
    }

    return ( 
        <>
            {infoArr.map((info, index) => {
                return (
                    <div key={`${info.id}-${index}`}>
                        <Card  sx={{borderRadius: '10px', border: '1px solid rgb(36, 36, 36)', bgcolor: 'rgba(0, 0, 13)', boxShadow: '0px 3px 5px 0px rgba(38, 62, 200, 0.2)'}}>
                            <CardHeader
                            sx={{color: 'white'}}
                            avatar={
                                <Avatar sx={{bgcolor: 'rgba(38, 62, 233)'}} aria-label="recipe">
                                    {info.title.toString().at(0).toUpperCase()}
                                </Avatar>
                            }   
                            title={info.title}
                            subheader={info.subheader}
                            
                            />
                            <CardMedia sx={{backgroundImage: 'cover', height: '400px'}} component="img" title={info.imgTitle} image={info.imgSrc} />
                            <Box sx={{padding: '20px'}}>
                                <Typography variant="p" color="initial">{info.info}</Typography>
                            </Box>  
                            <Button onClick={() => Deletepost(info.id)} variant="contained" sx={{margin: '20px'}}>DeletePost</Button>
                            <Button onClick={handelRedirect} variant="contained" sx={{margin: '20px'}}>Select</Button>
                        </Card>  
                    </div>
                )
        })}
        </>
    )
}