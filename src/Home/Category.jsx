/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const Category = ( { category } ) => {
    const {name}=category
    return (
        <nav>
            <ul className="">
                <li className="mt-2 font-semibold"><NavLink className={({isActive,isPending})=> isActive?'text-red-600':isPending?'pending':''}>{ name }</NavLink></li>
            </ul>
        </nav>
    );
};

export default Category;