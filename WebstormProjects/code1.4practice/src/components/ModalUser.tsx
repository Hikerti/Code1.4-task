import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {ModalUserProps} from "../interfaces/MainInterface.ts";

const ModalUser: React.FC<ModalUserProps> = ({showUser, setShowUser}) => {
    const [registerModal, setRegisterModal] = React.useState<boolean>(true);

    return (
        <div
            className={`fixed top-[70px] left-0 flex flex-col w-1/2 shadow-2xl
                justify-center items-center rounded-[10px] bg-white z-50 py-[20px]
                gap-5 duration-400 xl:top-[90px] ${!showUser ? 'translate-x-[-110%]' : 'translate-x-[0px]'}`}
        >
            <h2
                className='text-[1.5rem] font-family-primary-bold'
            >
                {registerModal ? 'Регистрация' : 'Вход'}
            </h2>
            <CloseIcon
                className='absolute top-[10px] right-[10px] cursor-pointer'
                onClick={() => setShowUser(!showUser)}
            >
            </CloseIcon>
            <div>
                {registerModal ?
                    (<form className='flex flex-col w-full gap-2 px-[20px]' action="">
                    <div className='flex w-full gap-2'>
                        <input
                            className='w-1/3 bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0'
                            type="text"
                            name='name'
                            placeholder='Введите имя' />
                        <input
                            className='w-1/3 bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0'
                            type="text"
                            name='surname'
                            placeholder='Введите фамилию' />
                        <input
                            className='w-1/3 bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0'
                            type="text"
                            name='patronymic'
                            placeholder='Введите отчество' />
                    </div>
                    <input
                        className='shadow-2xl bg-gray-100 p-2 rounded-[5px] outline-0'
                        type="text"
                        name='login'
                        placeholder='Login' />
                    <input
                        className='shadow-2xl bg-gray-100 p-2 rounded-[5px] outline-0'
                        type="email"
                        name='email'
                        placeholder='Email' />
                    <div className='flex w-full gap-2'>
                        <input
                            className='w-1/2 bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0'
                            type="password"
                            name='password'
                            placeholder='Password' />
                        <input
                            className='w-1/2 bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0'
                            type="password"
                            name='repeatPassword'
                            placeholder='Repear Password' />
                    </div>
                </form>) :
                    (<form className={`flex flex-col w-full gap-2`} action="">
                    <input
                        className='shadow-2xl bg-gray-100 p-2 rounded-[5px] outline-0'
                        type="text"
                        name='login'
                        placeholder='Login' />
                    <input
                        className='shadow-2xl bg-gray-100 p-2 rounded-[5px] outline-0'
                        type="email"
                        name='email'
                        placeholder='Email' />
                    <div className='flex w-full gap-2'>
                        <input
                            className='w-1/2 bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0'
                            type="password"
                            name='password'
                            placeholder='Password' />
                        <input
                            className='w-1/2 bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0'
                            type="password"
                            name='repeatPassword'
                            placeholder='Repear Password' />
                    </div>
                </form>)}
            </div>
            <div className='flex w-full px-5 gap-5'>
                <button
                    className='w-1/2 bg-red-500 text-white
                                        font-family-primary-bold text-[1.25rem] py-[10px] rounded-xl duration-200
                                        hover:text-gray-200 hover:bg-red-600
                                        sm:text-[1.75rem]'
                    onClick={() => setRegisterModal(true)}
                >
                    Зарегистрироваться
                </button>
                <button
                    className='w-1/2 bg-blue-500 text-white
                                        font-family-primary-bold text-[1.25rem] py-[10px] rounded-xl duration-200
                                        hover:text-gray-200 hover:bg-blue-600
                                        sm:text-[1.75rem]'
                    onClick={() => setRegisterModal(false)}
                >
                    Войти
                </button>
            </div>
        </div>
    );
};

export default ModalUser;