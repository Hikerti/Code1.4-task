import * as React from "react";
import {useGetPostersCountQuery} from "../../stor/API/postetsCountAPI.ts";
import ArrowRight from './ArrowRight.tsx'
import ArrowLeft from './ArrowLeft.tsx'
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const AboutPage: React.FC = () => {
    const {data: posts, isLoading, error} = useGetPostersCountQuery(-1);
    const [value, setValue] = React.useState<number>(0);

    if (isLoading) {
        return (
            <div className='w-full h-full flex items-center justify-center'>
                <CircularProgress></CircularProgress>
            </div>);
    }

    if (error) {
        // const err = error as { status: number };
        return (<p>Error...</p>)
    }

    return (
        <>
            <div className='flex relative overflow-hidden '>
               <ArrowLeft value={value} setValue={setValue}></ArrowLeft>
                <div
                    className='h-full'
                    style={{ width: `$calc(100% - 140px)` }}
                >
                    <div
                        className={`flex relative w-full h-full transition duration-300`}
                        style={{ transform: `translateX(calc(-${value}%))`}}
                    >
                        {posts?.map((elem, index) => (
                            <Link
                                className='min-w-full h-full'
                                to={`/poster/${elem.id}`}
                                key={index}
                                target='_blank'
                            >
                                <img
                                    className='w-full h-full object-cover z-[-1]'
                                    src={`/images/${elem.img}`}
                                    alt="img"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <ArrowRight value={value} setValue={setValue} posts={posts}></ArrowRight>
            </div>
        </>
    );
};

export default AboutPage;