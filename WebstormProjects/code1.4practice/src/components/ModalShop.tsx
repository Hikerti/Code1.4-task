import * as React from "react";
import CardsShopPost from "../UI/Cards/CardsShopPost.tsx";
import {ModalShopProps} from "../interfaces/MainInterface.ts";
import CloseIcon from '@mui/icons-material/Close';

const ModalShop: React.FC<ModalShopProps> = ({showShop, setShowShop} ) => {
    return (
        <div
            className={`fixed top-[70px] right-0 flex flex-col w-1/2 shadow-2xl
                justify-center items-center rounded-[10px] bg-white z-50 py-[20px]
                gap-5 duration-400 ${!showShop ? 'translate-x-[110%]' : 'translate-x-[0px]'} xl:top-[90px]`}
        >
            <h2
                className='text-[1.5rem] font-family-primary-bold'
            >
                Корзина
            </h2>
            <CloseIcon
                className='absolute top-[10px] right-[10px] cursor-pointer'
                onClick={() => setShowShop(!showShop)}
            >
            </CloseIcon>
            <CardsShopPost
                img='1.jpg'
                title='Название 1'
                genres={['Романтика', 'Хоррор']}
                index={1}
            >
            </CardsShopPost>
            <button
                className='w-8/10 bg-red-500 text-white
                                    font-family-primary-bold text-[1.25rem] py-[10px] rounded-xl duration-200
                                    hover:text-gray-200 hover:bg-red-600
                                    sm:text-[1.75rem]'
            >
                Совершить покупку
            </button>
        </div>
    );
};

export default ModalShop;