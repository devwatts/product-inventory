import { useState } from "react";
import { useAuth } from "../utils/auth";
import { addNewProduct } from "../actions/products";
import LoadingScreen from "./LoadingScreen";

export const Modal = (props) => {
    const [productName, setProductName] = useState('');
    const [actualPrice, setActualPrice] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();

    const handleProductName = (value) =>{
        setProductName(value);
    }
    const handleActualPrice = (value) =>{
        setActualPrice(value);
    }
    const handleSellingPrice = (value) =>{
        setSellingPrice(value);
    }
    const handleImageURL = (value) =>{
        setImageURL(value);
    }

    const resetValues = () => {
            setProductName('');
            setActualPrice('');
            setSellingPrice('');
            setImageURL('');    
    }

    const sendProductData = async() =>{
        setIsLoading(true);
        var data = {
            title:productName,
            sell_price:sellingPrice,
            act_price:actualPrice,
            image_url:imageURL
        }
        await addNewProduct(auth.user.token,data)
        .then(response => {
            if(response){
                resetValues();
                window.location.reload();
            }else{
                alert('Internal Server Error')
            }
            setIsLoading(false);
        })

    }

    return (
        <div className={props.isOpen?'bg-[#111111]/[0.40] h-[100vh] w-[100%] absolute top-0 z-[1000] flex items-center justify-center':'hidden'}>
            <LoadingScreen loading={isLoading}></LoadingScreen>
            <div className="bg-[white] h-[450px] w-[400px] rounded-lg p-[20px] flex flex-col">
                    <button className="self-end" onClick={()=>props.changeState(false)}>
                        <img alt="delete-icon" className="h-[20px] w-[20px]" src="./delete.png" />
                    </button>
                    <div className="flex flex-col items-center mt-[40px]">
                        <div className="flex items-center w-[80%] p-[5px] rounded-md border-[2px] mb-[20px]">
                            <img className="h-[22px]" alt="user" src="title-input.png" />
                            <input value={productName} placeholder="Product Title" className="ml-[6px] outline-none text-[14px]" onChange={(e) => handleProductName(e.target.value)} type={'text'} />
                        </div>
                        <div className="flex items-center w-[80%] p-[5px] rounded-md border-[2px] mb-[20px]">
                            <img className="h-[22px]" alt="user" src="price.png" />
                            <input value={actualPrice}  placeholder="Actual Price" className="ml-[6px] outline-none text-[14px]" onChange={(e) => handleActualPrice(e.target.value)} type={'text'} />
                        </div>
                        <div className="flex items-center w-[80%] p-[5px] rounded-md border-[2px] mb-[20px]">
                            <img className="h-[22px]" alt="user" src="price.png" />
                            <input  value={sellingPrice}  placeholder="Selling Price" className="ml-[6px] outline-none text-[14px]" onChange={(e) => handleSellingPrice(e.target.value)} type={'text'} />
                        </div>
                        <div className="flex items-center w-[80%] p-[5px] rounded-md border-[2px] mb-[20px]">
                            <img className="h-[22px]" alt="user" src="image-url.png" />
                            <input value={imageURL}  placeholder="Image URL" className="ml-[6px] outline-none text-[14px]" onChange={(e) => handleImageURL(e.target.value)} type={'text'} />
                        </div>
                        <button className="bg-[#ff3434] pl-[10px] pr-[10px] m-[10px] text-white rounded-md h-[30px]" onClick={() => sendProductData()}>Submit</button>
                    </div>
            </div>
        </div>
    );
}