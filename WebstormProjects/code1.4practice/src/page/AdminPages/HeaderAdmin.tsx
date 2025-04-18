import React from "react";
import { Link } from "react-router-dom";

const HeaderAdmin: React.FC = () => {
    return (
        <header className='container z-[50] fixed h-[60px] flex bg-white
            justify-evenly items-center border-b-2 border-gray-900
            xl:h-[80px]'
        >
            <Link to='posts?password=admin33'>
                Постановки
            </Link>
            <Link to='order?password=admin33'>
                Управление заказами
            </Link>
            <Link to='allorders?password=admin33'>
                Управление поставками
            </Link>
            <Link to='genres?password=admin33'>
                Управление жанрами
            </Link>
        </header>
    );
};

export default HeaderAdmin;