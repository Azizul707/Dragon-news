import { Outlet } from "react-router-dom";

const MainLayouts = () => {

    return (
        <div className="max-w-screen-xl mx-auto p-5">
            <Outlet></Outlet>   
        </div>
    );
};

export default MainLayouts;