import { Card, CardHeader, Avatar, Typography, CircularProgress, Pagination, Box} from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import FetchPost from "../../API/FetchPost/FetchPostData.js";
import useFetch from "../../Hooks/useFetch.js";
import { getPostCount } from "../../utils/getPostCount.js";
import classes from '../SectionFirst/SectionFirst.module.scss'
import {useParams} from "react-router-dom";

export default function CardPost({countPost}) {
    const [post, setPost] = useState([]) 
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [postCount, setPostCount] = useState(0)

    const [FetchPostData, isPost] = useFetch( async () => {
        let posts = await FetchPost(limit, page); 
        setPost(posts.data);
        setPostCount(posts.headers['x-total-count']);
    })

    useMemo( async () => {
        setLimit(countPost)
        let posts = await FetchPost(limit, page); 
        setPost(posts.data);
    }, [countPost, limit])

    useMemo(() => { 
        setTotalPage(getPostCount(postCount, limit))
    }, [postCount, limit])
    
    useEffect(() => {
        FetchPostData();
    }, [page]);

    const handleChange = (event, value) => {
      setPage(value);
    };

    return (
        <>
            <Box sx={{width: '100%', gap: '20px'}} className={classes.grid__container}>
                {
                isPost 
                ? <div className="flex items-center justify-center h-[500px] w-[100vw]"><CircularProgress color="secondary" /></div>
                : post.map((item, index) => {
                    return (
                        <div key={`${item.id} - ${index}`}>
                            <Card sx={{width: '100%', height: '200px', borderRadius: '10px', border: '1px solid rgb(36, 36, 36)', bgcolor: 'rgba(0, 0, 13)', boxShadow: '0px 3px 5px 0px rgba(38, 62, 200, 0.2)'}}>
                                <CardHeader
                                avatar={
                                    <Avatar aria-label="">
                                        {item.id}
                                    </Avatar>
                                }
                                title={item.title}
                                />
                                <div className='p-[20px] w-[90%]'>
                                    <Typography variant="p" color="initial">{item.body}</Typography>
                                </div>
                            </Card>
                        </div>
                    )
                })}
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Pagination count={totalPage} color="primary" page={page} onChange={handleChange}></Pagination>
            </Box>

    </>
    )
}
