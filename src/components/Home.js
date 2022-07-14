import { Card } from "./ProductCard"
import { useState,useEffect } from "react";
import { getAllProducts } from "../actions/products";
import { useAuth } from "../utils/auth";

export const Home = () => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        async function loadProducts(){
            setProducts(await getAllProducts());
        }
        loadProducts();
    },[]);

    //console.log(products)
    
    return(
        <div className="bg-[aliceblue] h-[100vh]">
            <div className="flex flex-wrap m-[auto] w-[80%]">
                {Object.keys(products).length !== 0?products.data.map((data,index)=><Card key={index} content={data}></Card>):''}
            </div>
        </div>
    )
}