import React from 'react';
import {RegistrationButtonProps} from "../../interfaces/MainInterface.ts";

const RegistrationButton: React.FC<RegistrationButtonProps> = ({setRegisterModal}) => {
    return (
        <button
            className='w-full bg-red-500 text-white
                font-family-primary-bold text-[1.25rem] py-[10px] rounded-xl duration-200
                hover:text-gray-200 hover:bg-red-600
                sm:text-[1.75rem]'
            onClick={() => setRegisterModal(true)}
        >
            Зарегистрироваться
        </button>
    );
};

export default RegistrationButton;