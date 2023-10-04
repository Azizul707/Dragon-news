import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {

    const [ categories, setCategories ] = useState( [] );

    useEffect( () => {
        fetch( '/categories.json' )
            .then( res => res.json() )
            .then( data => setCategories( data ) )
        
    },[])


    return (
        <div className="sticky">
            <h1 className="text-xl font-semibold">All Category</h1>
            {
                categories.map(category=><Category key={category.id} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;