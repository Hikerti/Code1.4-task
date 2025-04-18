import React from "react";
import {useGetPostersIndexQuery} from "../../stor/API/postersAPIIndex.ts";
import {useParams} from "react-router-dom";
import ButtonRed from "../../UI/Button/ButtonRed.tsx";
import CircularProgress from "@mui/material/CircularProgress";

const DetailsPage: React.FC = () => {

    const {index} = useParams();
    const numIndex: number = Number(index);

    const {data: post, isError, isLoading} = useGetPostersIndexQuery(numIndex);

    if (isError) {
        return (<div>Error...</div>)
    }

    if (isLoading) {
        return (
            <div className='w-full h-full flex items-center justify-center'>
                <CircularProgress></CircularProgress>
            </div>
        )
    }

    if (!post || post.length === 0) {
        return <div>No data found</div>;
    }

    const {title, img, genres, description} = post[0];

    console.log(post)
    return (
        <>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='flex justify-center w-8/10 h-full gap-5'>
                    <div className='w-1/3 !h-[100vh] flex justify-center'>
                        <img
                            className='w-full !h-3/4 object-cover'
                            src={`/images/${img}`}
                            alt="пост"
                        />
                    </div>
                    <div className='w-2/3 flex flex-col justify-between'>
                        <div className='flex flex-col'>
                            <h2
                                className='font-family-primary-bold text-[1.25rem]
                                        xl:text-[2rem]
                                        lg:text-[1.75em]
                                        md:text-[1.5rem]'
                            >
                                {title}
                            </h2>
                            <div className='flex gap-2'>

                                {genres ?
                                    genres.map(genre => (
                                    <p
                                        className='font-family-primary-regular text-[1rem] text-gray-500
                                        xl:text-[1.25rem]
                                        md:text-[1rem]'
                                    >
                                        {genre}
                                    </p>
                                ))
                                    :
                                    <div>Жанров нет</div>}
                            </div>
                            <p
                                className='font-family-primary-regular text-[1rem]
                                        xl:text-[1.25rem]
                                        md:text-[1rem]'
                            >
                                {description}
                            </p>
                        </div>
                        <div className='w-1/2'>
                            <ButtonRed>Добавить в корзину</ButtonRed>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsPage;