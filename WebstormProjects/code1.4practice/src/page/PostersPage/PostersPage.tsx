import * as React from "react";
import {Data} from "../../interfaces/MainInterface.ts";
import {useGetPostersQuery} from "../../stor/API/postersAPI.ts";
import CardsPost from "../../UI/Cards/CardsPost.tsx";


const PostersPage: React.FC = () => {
    const {data: posts, isLoading, isError} = useGetPostersQuery();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error...</p>;
    }

    return (
       <>
           <div
               className='flex flex-col gap-10 w-full items-center'
           >
               {posts?.map((elem: Data, index: number) => {
                    return (
                        <CardsPost
                            img={elem.img}
                            title={elem.title}
                            genres={elem.genres}
                            index={index}
                        >
                        </CardsPost>
                    )
               })}
           </div>
       </>
    );
};

export default PostersPage;