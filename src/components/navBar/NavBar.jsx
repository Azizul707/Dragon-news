import { Link, NavLink } from "react-router-dom";
import demoProfile from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const NavBar = () => {
    
    const { user, logOut } = useContext( AuthContext )
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
        
    }
    


    return (
        <nav className="mt-5 md:flex justify-end items-center gap-[27rem]">
            <ul className="md:flex gap-5">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/career'>Career</NavLink></li>
            </ul>
            <div className=" flex gap-3">
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={ demoProfile } />
                    </div>
                </div>
                {
                    user ? <button onClick={handleLogOut} className="bg-[#403F3F] text-white py-1 px-5">logout</button>
                        :

                        <Link to='/login'><button className="bg-[#403F3F] text-white py-1 px-5">login</button>
                        </Link>
                }
            </div>
        </nav>
    );
};

export default NavBar;