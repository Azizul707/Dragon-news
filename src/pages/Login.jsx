/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const { userSingIn } = useContext( AuthContext );
    const location = useLocation();
    const navigate = useNavigate();
   
    
    

    
    const handleLogin = ( e ) => {
        e.preventDefault();
        const form = new FormData( e.currentTarget );
        const email = form.get( 'email' );
        const password = form.get( 'password' )

        userSingIn( email, password )
            .then( result => {
                const user = result.user;
                toast.success( 'Successfully login!' )
                navigate(location?.state ? location.state : '/')
            
                  
            } )
            
            .catch( error => {
                const errorText = error.message;
                toast.error( errorText );
                
            } );
        
        
       
    };

    return (
        <div>
            <NavBar></NavBar>
            <div className=" w-1/2 mx-auto mt-20 bg-slate-100 rounded-2xl">
                <h2 className="text-2xl font-semibold text-center pt-5">Please Login Here</h2>
                <form onSubmit={handleLogin} className="shadow-sm md:p-20 mt-7 font-semibold">
                    <div className="">
                    <label htmlFor="email">Email</label><br />
                    <input className="border w-full p-2" type="email" name="email" required placeholder="email" />
                    </div>
                    <div className="">
                    <label htmlFor="password">Password</label><br />
                    <input className="border w-full p-2" type="password" name="password" placeholder="password" />
                    </div>
                    <div className="">
                        <input className="mt-5 btn" type="submit" defaultValue='Login' />
                    </div>
                    <p className="mt-10 text-center">Do Not Have An Account <Link className="underline font-bold text-blue-500" to='/register'>Register</Link></p>
                </form>
            </div>

        </div>
    );
};

export default Login;