import { useEffect } from "react";
export default function LoadingScreen(props){

    useEffect(() => {
        if(props.loading){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
    },[props.loading])

    return (
        <div className={props.loading?'bg-[#111111]/[0.40] h-[100%] fixed  min-h-[100vh] w-[100%] top-0 z-[1000] flex items-center justify-center':'hidden'}>
            <img alt="Loading" src='/loading.gif' />
        </div>
    );
}