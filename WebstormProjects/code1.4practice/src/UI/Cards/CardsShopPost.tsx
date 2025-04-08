import * as React from "react";
import { CardProps } from "../../interfaces/MainInterface";


const CardsPost: React.FC<CardProps> = ({index, title, img, genres}) => {
    return (
        <div
            className='flex bg-gray-100 w-8/10 h-auto flex-col justify-between gap-5 p-5 rounded-[10px] shadow-xl
                            xl:h-[40vh]
                            lg:h-[30vh]
                            md:h-[20vh] gap-2 md:flex-row'
            key={index}
        >
            <div
                className='w-full md:w-1/2'
            >
                <img
                    className='!h-full object-cover rounded-s-[10px]'
                    src={`/images/${img}`}
                    alt={`elem.${index}`}
                />
            </div>
            <div className='w-full flex flex-col  justify-between'>
                <div className='flex flex-col w-full'>
                    <h2
                        className='font-family-primary-bold text-[1.25rem]
                                        xl:text-[1.5rem]
                                        md:text-[1.25rem]
                                        '
                    >
                        {title}
                    </h2>
                    <p
                        className='font-family-primary-regular text-[1rem] text-gray-500
                                        xl:text-[1.25rem]
                                        md:text-[1rem]'
                    >
                        {genres.join(', ')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardsPost;