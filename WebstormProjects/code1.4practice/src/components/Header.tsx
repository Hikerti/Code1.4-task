import * as React from "react";
import {Link} from "react-router-dom";
import UserImg from '../../public/images/пользователей.png'
import LogoImg from '../../public/images/logoteatre.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ModalShop from "./ModalShop.tsx";
import ModalUser from "./ModalUser/ModalUser.tsx";

const Header: React.FC = () => {

    const [showShop, setShowShop] = React.useState<boolean>(false);
    const [showUser, setShowUser] = React.useState<boolean>(false);

    return (
        <header
            className='container z-[50] fixed h-[60px] flex bg-white
            justify-between items-center border-b-2 border-gray-900
            xl:h-[80px]'
        >
            <Link to="/">
                <img
                    className='!h-[40px] cursor-pointer xl:!h-[60px]' src={LogoImg} alt="logo"
                />
            </Link>
            <nav
                className='h-full hidden w-1/2
                md:block'
            >
                <ul
                    className='h-full flex justify-between items-center  duration-200'
                >
                    <Link to="/">
                        <li className='font-family-primary-regular hover:text-gray-500 duration-200'>
                            О нас
                        </li>
                    </Link>
                    <Link to="/poster">
                        <li className='font-family-primary-regular hover:text-gray-500 duration-200'>
                            Афиша
                        </li>
                    </Link>
                    <Link to="/wheredowefind">
                        <li className='font-family-primary-regular hover:text-gray-500 duration-200'>
                            Где нас найти
                        </li>
                    </Link>
                </ul>
            </nav>
            <div className='flex h-[80px] gap-10 items-center'>
                <ShoppingBasketIcon
                    className='cursor-pointer'
                    sx={{width: '50px', height: '50px'}}
                    onClick={() => {
                        setShowShop(!showShop)
                        setShowUser(false)
                    }}>
                </ShoppingBasketIcon>
                <img
                    className='w-[40px] h-[40px] cursor-pointer xl:!h-[50px] xl:!w-[50px]'
                    src={UserImg}
                    alt="user"
                    onClick={() => {
                        setShowUser(!showUser)
                        setShowShop(false)
                    }}
                />
            </div>
            <ModalShop
                showShop={showShop} setShowShop={setShowShop}
            >
            </ModalShop>
            <ModalUser
                showUser={showUser} setShowUser={setShowUser}
            >
            </ModalUser>
        </header>
    );
};

export default Header;