import * as React from "react";
import {useGetPostersCountQuery} from "../../stor/API/postetsCountAPI.ts";
import ArrowRight from './ArrowRight.tsx'
import ArrowLeft from './ArrowLeft.tsx'

const AboutPage: React.FC = () => {
    const {data: posts, isLoading, error} = useGetPostersCountQuery(5);
    const [value, setValue] = React.useState<number>(0);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error...</p>;
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
                        className={`flex relative w-full h-full transition duration-300 z-[-1]`}
                        style={{ transform: `translateX(calc(-${value}%))`}}
                    >
                        {posts?.map((elem, index) => (
                            <img
                                className='min-w-full h-auto object-cover'
                                src={`/images/${elem.img}`}
                                alt="img"
                                key={index} />
                        ))}
                    </div>
                </div>
                <ArrowRight value={value} setValue={setValue} posts={posts}></ArrowRight>
            </div>
        </>
    );
};

export default AboutPage;