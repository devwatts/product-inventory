import { Card } from "./ProductCard"
import { useState,useEffect } from "react";
import { getAllProducts } from "../actions/products";
import { useAuth } from "../utils/auth";
import { Modal } from "./Modal";
import LoadingScreen from "./LoadingScreen";
import { useNavigate } from "react-router-dom";
import { RequireAuth } from "../utils/RequireAuth";

export const Home = () => {
    const [products, setProducts] = useState({});
    const [modalOpen, setmodalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const auth = useAuth();
    
    useEffect(() => {
        async function loadProducts(){
            setProducts(await getAllProducts());
            setLoading(false);
        }
        loadProducts();
    },[]);

    const handleLogin =()=>{
        navigate('/login');
    }
    
    return(
        <div className="bg-[aliceblue] h-[100%] min-h-[100vh]">
            <LoadingScreen loading={loading}></LoadingScreen>
            <Modal isOpen={modalOpen} changeState={setmodalOpen}></Modal>
            <RequireAuth>
                <div className="flex justify-end items-center h-[70px] p-[20px]">
                    <button className="bg-[#ff3434] pl-[10px] pr-[10px] m-[10px] text-white rounded-md h-[30px]" onClick={() => setmodalOpen(!modalOpen)}>Add new products</button>
                    <button className="bg-[#ff3434] pl-[10px] pr-[10px] m-[10px] text-white rounded-md h-[30px]" onClick={() => auth.logout()}>Logout</button>
                </div>
            </RequireAuth>
                {
                Object.keys(auth.user).length !== 0 && auth.user.user !== undefined?'': 
                <div className="flex justify-end items-center h-[70px] p-[20px]">
                    <button className="bg-[#ff3434] pl-[10px] pr-[10px] m-[10px] text-white rounded-md h-[30px]" onClick={() => handleLogin()}>Login</button>
                </div>
                }
            
            <div className="flex flex-wrap m-[auto] w-[80%]">
                {Object.keys(products).length !== 0?products.data.map((data,index)=><Card setIsLoading={setLoading} key={data._id} content={data}></Card>):''}
            </div>
        </div>
    )
}