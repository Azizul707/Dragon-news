import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/MainLayouts/MainLayouts";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";


const Rooutes = createBrowserRouter( [ {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children: [
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/login',
            element:<Login></Login>
        }
    ]



} ] )

export default Rooutes;