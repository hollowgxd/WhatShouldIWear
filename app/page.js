import Image from "next/image";
import ClothesBlock from "@/Components/ClothesBlock";
import WeatherBlock from "@/Components/WeatherBlock";
import ForecastBlock from "@/Components/ForecastBlock";
import InfoBlock from "@/Components/InfoBlock";
import {X} from "lucide-react";

export default function Home() {
  return (<div className="h-screen flex flex-col gap-6 p-12 lg:p-20 bg-gray-800">





      <div className="flex h-1/2 gap-6 flex-col sm:flex-row ">
      <WeatherBlock/>
      <ClothesBlock/>
      </div>
  <div className="flex flex-col gap-6 sm:flex-row h-1/2">
      <ForecastBlock/>
      <InfoBlock/>
  </div></div>
)

}
