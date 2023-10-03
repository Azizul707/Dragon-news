import { Link } from "react-router-dom";
import Header from "../components/MainLayouts/Header/Header";
import Marquee from "react-fast-marquee";
import NavBar from "../components/navBar/NavBar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="bg-[#F3F3F3] w-full p-5 mt-7 flex">
                <button className="btn btn-error text-white">Latest</button>
                <Marquee>
                    <Link to='/login'>
                        <p className="text-[#403F3F] font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    </Link>
                </Marquee>
            </div>
            <div className="">
                <NavBar></NavBar>
            </div>
        </div>
    );
};

export default Home;