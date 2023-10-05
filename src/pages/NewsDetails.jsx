
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/MainLayouts/Header/Header";
import NavBar from "../components/navBar/NavBar";
import LoginWith from "../Home/LoginWith";
import DetailsPage from "./DetailsPage";
import { useEffect, useState } from "react";


const NewsDetails = () => {
    const { id } = useParams()
    
    
    

    const news = useLoaderData( [] );
    
    
    const [ selectNews, setSelectNews ] = useState( {} );

    useEffect( () => {
        const targetNews = news?.find( ( news ) => news._id === id );
        setSelectNews(targetNews)
        
    }, [ id, news ] )

    
   
    

    return (
        <div>
            <Header></Header>
            <div className="">
                <NavBar></NavBar>
            </div>
            <div className="mt-10 grid lg:grid-cols-4 gap-6">
                <div className="col-span-3">
                    {
                        <DetailsPage selectNews={selectNews}></DetailsPage>
                    }
                </div>
                <div className="">
                    <LoginWith></LoginWith>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;