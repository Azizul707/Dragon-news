import { Link } from "react-router-dom";


const DetailsPage = ( { selectNews } ) => {
    const {image_url,details,title}=selectNews


    return (
        <div>
            <div className="text-2xl font-semibold">Dragon News</div>

            <div className="mt-10 space-y-5 border-b">
                <div className="">
                    <img className="w-full" src={image_url} alt="" />
                </div>
                <div className=""><h2 className="text-2xl font-semibold">{ title}</h2></div>
                <div className="">
                    <p className="text-sm">{ details }</p>
                </div>

                <div className="">
                <Link to='/'> <button className="bg-[#D72050] text-white py-1 px-6">All News In This Category</button></Link>
               </div>

            
            
            </div>

        </div>
    );
};

export default DetailsPage;