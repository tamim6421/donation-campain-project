import { Outlet } from "react-router-dom";
import Banner from "../Components/Header/Banner/Banner";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;