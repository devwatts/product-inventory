export const Card = (props) => {
    //console.log(props)
    return (
        <div className="w-[180px] h-[240px] bg-[white] p-[12px] rounded-lg shadow-lg flex flex-col m-[30px]">
            <div className="flex justify-end cursor-pointer">
                <img alt="delete-icon" className="h-[20px] w-[20px]" src="./delete.png" />
            </div>
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
                <span className="text-[13px] text-[green]">50% off</span>
            </div>
        </div>
    )
}