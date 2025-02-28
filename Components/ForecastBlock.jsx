import Block from "@/Components/Block";
import ForecastDay from "@/Components/forecastDay";

export default function ForecastBlock()  {
    return (<Block>
            <div className="w-full flex h-full overflow-y-auto flex-col items-center gap-2">
<ForecastDay/>
            <ForecastDay/><ForecastDay/><ForecastDay/>
            <ForecastDay/>
            <ForecastDay/></div>
        </Block>
    )


}