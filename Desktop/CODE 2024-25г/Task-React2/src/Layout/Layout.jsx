import Header from "../Component/Header/Header.jsx";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Layout;