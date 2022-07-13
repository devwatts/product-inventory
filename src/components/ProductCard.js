export const Card = (props) => {
    return (
        <div className="w-[180px] h-[240px] bg-[white] p-[12px] rounded-lg shadow-lg flex flex-col m-[30px]">
            <div className="flex justify-end cursor-pointer">
                <img alt="delete-icon" className="h-[20px] w-[20px]" src="./delete.png" />
            </div>
            <div className="place-self-center">
                <img alt="product" className="h-[120px] w-[auto] max-w-[200px] rounded-sm" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11699848/2020/6/5/1a4109e3-f61b-4402-a58c-fcfe58df427d1591364205774AccessorizeGold-TonedHealingStonesRoseQuartzPendantWithChain2.jpg" />
            </div>
            <div className="mt-[8px]">
                <span className="text-[14px]">
                    Pendant
                </span>
            </div>
            <div className="w-[90%] mt-[3px] flex justify-between items-center">
                <span className="text-[14px] font-bold">₹499</span>
                <span className="text-[14px] text-[gray] line-through">₹999</span>
                <span className="text-[13px] text-[green]">50% off</span>
            </div>
        </div>
    )
}