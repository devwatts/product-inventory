export default function LoadingScreen(props){
    return (
        <div className={props.loading?'bg-[#111111]/[0.40] h-[100vh] w-[100%] absolute top-0 z-[1000] flex items-center justify-center':'hidden'}>
            <img alt="Loading" src='/loading.gif' />
        </div>
    );
}