import { useEffect, useState } from "react";
import ShowNews from "./ShowNews";

const Dnews = () => {
    const [ news, setNews ] = useState( [] );
    useEffect( () => {
        fetch( '/news.json' )
            .then( res => res.json() )
            .then( data => setNews( data ) )
        
    }, [] )
    

    return (
        <div>
            <h1 className="text-xl font-semibold">Dragon News Home</h1>
            {
                news.map((news,idx)=><ShowNews key={idx} news={news}></ShowNews>)
            }
        </div>
    );
};

export default Dnews;