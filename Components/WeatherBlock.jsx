import Block from "@/Components/Block";
import Image from "next/image";
import cloud from "../public/cloud.png";
export default function WeatherBlock()  {
    return (<Block>
        <div className="z-40 relative ">
            <h1 className="text-8xl z-[10] text-white">25*</h1>
            <p className="text-white text-xl z-[10]">Moscow</p>
        <p className="text-white text-sm z-[10]">Sunny</p></div>
    <Image className="absolute z-0 left-1/2 top-4" width={200} height={200} alt={"bob"} src={cloud}/>
        </Block>
    )


}