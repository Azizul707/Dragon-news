import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/MainLayouts/MainLayouts";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const Routes = createBrowserRouter( [ {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children: [
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path: '/news/:id',
            element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
            loader: ()=> fetch('/news.json')
            
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

export default Routes;