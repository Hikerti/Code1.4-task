import React from "react";
import {useGetPostersCountQuery} from "../../../stor/API/postetsCountAPI.ts";
import CardsPost from "../../../UI/Cards/CardsPost.tsx";
import TableCreatePosters from "./TableCreatePosters.tsx";

const CreateAdminPosts: React.FC = () => {

    const {data: posts, isLoading, error} = useGetPostersCountQuery(10);

    if (isLoading) {
        return (
            <div>
                ...Loading
            </div>
        )
    }

    if (error) {
        return (
            <div>
                ...Error
            </div>
        )
    }


    return (
        <div className='flex flex-col gap-10 w-full items-center'>
            <TableCreatePosters></TableCreatePosters>
            {posts
            ?
            posts.map((elem, index) => (
                <div key={index} className='w-full flex flex-col gap-10 w-full items-center'>
                    <CardsPost
                        img={elem.img}
                        title={elem.title}
                        genres={elem.genres}
                        index={index}
                    >
                    </CardsPost>
                </div>
            ))
            :
            <div>Ошибка</div>}
        </div>
    );
};

export default CreateAdminPosts;