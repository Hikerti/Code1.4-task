import * as React from "react";
import Header from "./Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.tsx";

const Layout: React.FC = () => {
    return (
        <>
            <Header></Header>
            <main className='container h-[100%] mt-[80px] xl:mt-[100px]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Layout;