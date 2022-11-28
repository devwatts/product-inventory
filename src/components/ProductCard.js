import { useAuth } from "../utils/auth";
import { deleteProduct } from "../actions/products";

export const Card = (props) => {
    const auth = useAuth();

    const deleteProductHandle = async(id) => {
        props.setIsLoading(true);
        await deleteProduct(auth.user.token,id)
        .then(response => {
            if(response){
                window.location.reload();
            }else{
                alert('Couldnt delete the Product')
                props.setIsLoading(false);
            }
        })
    }

    return (
        <div className="w-[180px] h-[240px] bg-[white] p-[12px] rounded-lg shadow-lg flex flex-col m-[30px]">
            {auth.user.user?
            <div onClick={() => deleteProductHandle(props.content._id)} className="flex justify-end cursor-pointer">
                <img alt="delete-icon" className="h-[20px] w-[20px]" src="./delete.png" />
            </div>:''}
            <div className="place-self-center">
                <img alt="product" className="h-[120px] w-[auto] max-w-[200px] rounded-sm" src={props.content.image_url} />
            </div>
            <div className="mt-[8px]">
                <span className="text-[14px]">
                    {props.content.title}
                </span>
            </div>
            <div className="w-[90%] mt-[3px] flex justify-between items-center">
                <span className="text-[14px] font-bold">₹{props.content.sell_price}</span>
                <span className="text-[14px] text-[gray] line-through">₹{props.content.act_price}</span>
                <span className="text-[13px] text-[green]">{parseInt(parseInt(props.content.act_price)/parseInt(props.content.sell_price))}%OFF</span>
            </div>
        </div>
    )
}