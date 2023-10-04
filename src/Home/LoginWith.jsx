import { AiOutlineGoogle, AiOutlineGithub, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import qzone from '../assets/qZone1.png';
import qzone2 from '../assets/qZone2.png';
import qzone3 from '../assets/qZone3.png';
import qzone4 from '../assets/bg1.png';

const LoginWith = () => {
    return (
        <div>
            <div className="space-y-2">
                <h2 className="text-[#403F3F] font-semibold text-xl ">login with</h2>
                <div className="flex items-center justify-center w-10/12 rounded-md border hover:text-green-500 hover:border-green-500">
                    <span><AiOutlineGoogle></AiOutlineGoogle></span>
                    <button className="font-semibold">Login With Google</button>
                </div>

                <div className="flex items-center justify-center w-10/12 rounded-md border hover:text-green-500 hover:border-green-500">
                    <span><AiOutlineGithub></AiOutlineGithub></span>
                    <button className="font-semibold">Login With Google</button>
                </div>
            </div>

            <div className="mt-6 text-xl font-semibold"><h4>Find Us On</h4></div>
            
            <div className="mt-5 border rounded-md w-10/12">
                <div className="p-2 border-b "><span className=" flex items-center gap-2 text-xl"><AiOutlineFacebook className="rounded-full bg-[#F3F3F3] p-[2px]"></AiOutlineFacebook> <a href="http://facebook.com">facebook</a></span> </div>

                <div className="p-2 border-b "><span className=" flex items-center gap-2 text-xl"><AiOutlineInstagram className="rounded-full bg-[#F3F3F3] p-[2px]"></AiOutlineInstagram><a href="http://facebook.com">instagram</a></span> </div>

                <div className="p-2 border-b "><span className=" flex items-center gap-2 text-xl"><AiOutlineTwitter className="rounded-full bg-[#F3F3F3] p-[2px]"></AiOutlineTwitter><a href="http://facebook.com">twitter</a></span> </div>
            </div>


            <div className="p-2 w-10/12 bg-[#F3F3F3] mt-5">
                <div className=""><h4 className="text-xl font-semibold">Q Zone</h4></div>
                <div className="">
                    <img src={qzone} alt="" />
                </div>
                <div className="">
                    <img src={qzone2} alt="" />
                </div>
                <div className="">
                    <img src={qzone3} alt="" />
                </div>
            </div>
            <div className="mt-10">
                <div className="w-10/12 relative ">
                    <img src={qzone4} alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-60 z-0">
                        <h5 className="text-white font-bold text-3xl text-center pt-14 z-20">Create an Amazing Newspaper</h5>
                        <p className="text-white text-center pt-6 px-4">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <div className="px-16 pt-10">
                        <button className=" p-3 text-white  bg-[#D72050] outline-none border-none">Learn More</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default LoginWith;