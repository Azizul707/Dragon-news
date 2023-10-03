import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="mt-5 md:flex justify-end items-center gap-[29rem]">
            <ul className="md:flex gap-5">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/career'>Career</NavLink></li>
            </ul> 
            <div className="">
                
                <button className="bg-[#403F3F] text-white py-1 px-5">login</button></div>
        </nav>
    );
};

export default NavBar;