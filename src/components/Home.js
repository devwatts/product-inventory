import { Card } from "./ProductCard"


export const Home = () =>{
    return(
        <div className="bg-[aliceblue] h-[100vh]">
            <div className="flex flex-wrap m-[auto] w-[80%]">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}