import Header from "../../Component/Header/Header.jsx";
import SectionFirst from "../../Component/SectionFirst/SectionFirst.jsx";


const MainPage = () => {
    return (
        <>
            <Header></Header>
            <div className="w-[80%] ml-[10%] mt-[100px]">
                <SectionFirst></SectionFirst>
            </div>
        </>
    );
};

export default MainPage;