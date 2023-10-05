import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";


const MainLayouts = () => {

    return (
        <div className="max-w-screen-xl mx-auto p-5">
            <Outlet></Outlet>  
            <Toaster></Toaster>
            
            
        </div>
    );
};

export default MainLayouts;