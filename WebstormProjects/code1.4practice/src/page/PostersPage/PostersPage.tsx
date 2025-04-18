import * as React from "react";
import {Data} from "../../interfaces/MainInterface.ts";
import {useGetPostersQuery} from "../../stor/API/postersAPI.ts";
import CardsPost from "../../UI/Cards/CardsPost.tsx";
import Skeleton from "@mui/material/Skeleton";


const PostersPage: React.FC = () => {
    const {data: posts, isLoading, error} = useGetPostersQuery();

    if (isLoading) {
        return (
            <Skeleton
                variant="rectangular"
                sx={{width:'100%', height:'100%'}}
            />
        );
    }

    if (error) {
        const err = error as {status: number};
        return <p>{err.status} Error...</p>;
    }

    return (
       <>
           <div
               className='flex flex-col gap-10 w-full items-center'
           >
               {posts?.map((elem: Data, index: number) => {
                    return (
                        <div key={index} className='w-full flex flex-col gap-10 w-full items-center'>
                            <CardsPost
                                img={elem.img}
                                title={elem.title}
                                genres={elem.genres}
                                index={elem.id}
                            >
                            </CardsPost>
                        </div>
                    )
               })}
           </div>
       </>
    );
};

export default PostersPage;