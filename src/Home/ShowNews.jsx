/* eslint-disable react/prop-types */

import { AiFillEye } from "react-icons/ai";


const ShowNews = ( { news } ) => {
    const { author, title, thumbnail_url, details, rating, total_view } = news;

    return (
        <div className="p-2 my-10 shadow-lg">
            <div className="">
                <div className="bg-[#F3F3F3] flex items-center gap-2 p-1">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={ author.img } />
                        </div>
                    </div>
                    <div className="">
                        <span>{ author.name }</span><br />
                        <span>{ author.published_date }</span>

                    </div>

                </div>
                <div className=""><h2 className="text-[#403F3F] text-xl font-bold">{ title }</h2></div>
                <div className="">
                    <img className="w-[50rem] h-[25rem]" src={ thumbnail_url } alt="" />
                </div>
                <div className="mt-4"><p className="text-sm">{ details.slice( 0, 250 ) }</p>
                    <button className="mt-2 text-[#FF8C47] font-semibold">Read More</button>
                </div><hr />
                <div className="flex justify-between mt-5  p-5">
                    <span><div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> 
                         <span className="ml-2"> { rating?.number }</span>
                        
                    </div></span>
                    <span className="flex items-center gap-2"><AiFillEye></AiFillEye>{ total_view }</span>
                </div>
                    

            </div>

        </div>
    );
};

export default ShowNews;