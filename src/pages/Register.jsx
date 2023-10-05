import { Link, Navigate } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";




const Register = () => {

    const { createUser } = useContext( AuthContext );
   



    const handleRegister = ( e ) => {
        e.preventDefault();

        const form = new FormData( e.currentTarget );
        const name = form.get( 'name' );
        const photo = form.get( 'photoURL' );
        const email = form.get( 'email' );
        const password = form.get( 'password' );

        createUser( email, password )

            .then( result => {

                const user = result.user;
                toast.success('Successfully Registered!')

                
                

            } )
            .catch( error => {
                const errorMessage = error.message;
                toast.error({errorMessage})
            } );





    }
    return (
        <div>
            <NavBar></NavBar>
            <div className=" w-1/2 mx-auto mt-20 bg-slate-100 rounded-2xl">
                <h2 className="text-2xl font-semibold text-center pt-5">Please Register Here</h2>
                <form onSubmit={ handleRegister } className="shadow-sm md:p-20 mt-7 font-semibold">
                    <div className="">
                        <label htmlFor="email">Name</label><br />
                        <input className="border w-full p-2" type="text" name="name" required placeholder="Name" />
                    </div><div className="">
                        <label htmlFor="photourl">PhotoUrl</label><br />
                        <input className="border w-full p-2" type="text" name="PhotoURL" placeholder="PhotoURL" />
                    </div>


                    <div className="">
                        <label htmlFor="email">Email</label><br />
                        <input className="border w-full p-2" type="email" name="email" required placeholder="email" />
                    </div>
                    <div className="">
                        <label htmlFor="password">Password</label><br />
                        <input className="border w-full p-2" type="password" name="password" placeholder="password" />
                    </div>
                    
                    <div className="">
                        <input className="mt-5 btn" type="submit" defaultValue='Register' />
                    </div>
                    <p className="mt-10 text-center">
                        All Ready Have An Account
                        <Link className="underline font-bold text-blue-500" to='/login'>login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;