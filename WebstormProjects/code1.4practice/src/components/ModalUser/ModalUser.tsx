import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {ModalUserProps} from "../../interfaces/MainInterface.ts";
import FormRegistration from "./FormRegistration.tsx";
import FormEntry from "./FormEntry.tsx";
import RegistrationButton from "../../UI/Button/RegistrationButton.tsx";
import EntryButton from "../../UI/Button/EntryButton.tsx";

const ModalUser: React.FC<ModalUserProps> = ({showUser, setShowUser}) => {
    const [registerModal, setRegisterModal] = React.useState<boolean>(true);

    return (
        <div
            className={`fixed top-[70px] left-0 flex flex-col w-full shadow-2xl
                justify-center items-center rounded-[10px] bg-white z-50 py-[20px]
                gap-[10px] duration-400 xl:top-[90px] 
                ${!showUser ? 'translate-x-[-110%]' : 'translate-x-[0px]'}
                sm:w-1/2`}
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
            <div className='w-full px-5'>
                {registerModal ?
                    <FormRegistration></FormRegistration>
                    :
                    <FormEntry></FormEntry>}
            </div>
            <div className='flex w-full px-5'>
                {registerModal ?
                    <EntryButton setRegisterModal={setRegisterModal}></EntryButton>
                    :
                    <RegistrationButton setRegisterModal={setRegisterModal}></RegistrationButton>
                }
            </div>
        </div>
    );
};

export default ModalUser;