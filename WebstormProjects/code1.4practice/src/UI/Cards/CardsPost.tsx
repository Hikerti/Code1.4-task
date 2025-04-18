import * as React from "react";
import { CardProps } from "../../interfaces/MainInterface";
import { Link } from "react-router-dom";


const CardsPost: React.FC<CardProps> = ({index, title, img, genres}) => {
    return (
        <Link
            className='flex bg-gray-100 w-8/10 h-auto flex-col justify-between gap-5 p-5 rounded-[10px] shadow-xl
                            xl:h-[55vh]
                            lg:h-[50vh]
                            md:h-[40vh] gap-2 md:flex-row'
            to={`/poster/${index}`}
            target='_blank'
            key={index}
        >
            <div
                className='w-full
                                md:w-1/2'
            >
                <img
                    className='!h-full object-cover rounded-s-[10px]'
                    src={`/images/${img}`}
                    alt={`${index}`}
                />
            </div>
            <div className='w-full flex flex-col  justify-between'>
                <div className='flex flex-col w-full'>
                    <h2
                        className='font-family-primary-bold text-[1.25rem]
                                        xl:text-[2rem]
                                        lg:text-[1.75em]
                                        md:text-[1.5rem]'
                    >
                        {title}
                    </h2>
                    <p
                        className='font-family-primary-regular text-[1rem] text-gray-500
                                        xl:text-[1.5rem]
                                        lg:text-[1.5rem]
                                        md:text-[1.25rem]'
                    >
                        {genres.join(', ')}
                    </p>
                </div>
                <button
                    className='w-1/2 bg-red-500 text-white
                                    font-family-primary-bold text-[1.25rem] py-[10px] rounded-xl duration-200
                                    hover:text-gray-200 hover:bg-red-600
                                    sm:text-[1.75rem]'
                    onClick={(event) => {event.preventDefault()}}
                >
                    Добавить в корзину
                </button>
            </div>
        </Link>
    );
};

export default CardsPost;