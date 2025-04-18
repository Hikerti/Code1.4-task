import React from "react";
import HeaderAdmin from "./HeaderAdmin.tsx";
import { Outlet } from "react-router-dom";
import {useLocation} from "react-router-dom";

const LayoutAdmin: React.FC = () => {
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const password = params.get("password");

    const admin_password = import.meta.env.VITE_ADMIN_PASSWORD;

    if (password !== admin_password) {
        return (
            <h2>Введите корректный пароль</h2>
        )
    }

    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <main className='container h-[100%] mt-[80px] xl:mt-[100px]'>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default LayoutAdmin;