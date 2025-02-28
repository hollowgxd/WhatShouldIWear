import Block from "@/Components/Block";
import {HardHat} from "lucide-react";
import Image from "next/image"
import person from "/public/person.png"
export default function ClothesBlock() {
    return (<Block >
            <div className="flex w-full h-full justify-center  relative">
                <div className="h-full flex flex-col items-end w-1/3 ">
                    <div className={"flex h-[20%] bg-red-200 items-center"}>
                        <div>
                            <div>голова</div>
                            <p>Шапка</p></div>


                    </div>
                    <div className={"flex h-[20%]  bg-red-300 items-center"}>
                        <div>
                            <div>шея</div>
                            <p>Шарф</p></div>


                    </div>
                    <div className={"flex h-[20%] bg-red-400 items-center"}>
                        <div>
                            <div>верхняя одежда туловище</div>
                            <p>Ветровка</p></div>


                    </div>
                    <div className={"flex h-[20%] bg-red-500 items-center"}>
                        <div>
                            <div>штаны</div>
                            <p>Джинсы</p></div>


                    </div>
                    <div className={"flex h-[20%] bg-red-600 items-center"}>
                        <div>
                            <div>штаны</div>
                            <p>Джинсы</p></div>


                    </div>


                </div>
                <div className={"bg-red-200 h-full relative mx-[100px]"}>
                    <div className="bg-amber-50 w-[150px] absolute left-[-120px] top-[20px] h-[1px]"></div>
                    <div className="bg-amber-50 w-[150px] absolute -rotate-[20deg] left-[-100px] top-[65px] h-[1px]"></div>
                    <div className="bg-amber-50 w-[150px] absolute left-[-100px] -rotate-[20deg] top-[150px] h-[1px]"></div>
                    <div className="bg-amber-50 w-[150px] absolute left-[-100px] -rotate-[10deg] top-[230px] h-[1px]"></div>
                    <div className="bg-amber-50 w-[150px]  absolute left-[-100px] rotate-[10deg] top-[320px] h-[1px]"></div>
                    <div className="bg-amber-50 w-[150px] absolute left-[-120px] top-[20px] h-[1px]"></div>
                    <div className="bg-amber-50 w-[150px] absolute left-[-120px] top-[20px] h-[1px]"></div>
                    <img src={"/person.png"} className="h-full" alt="person"/>
                </div>
                <div className="h-full flex flex-col items-end w-1/3 justify-between">
                <div className={"flex items-center"}>
                        <div>     <div>лицо</div>
                        <p>очки</p></div>
                        <div className="bg-amber-50 w-[50px] h-[1px]"></div>

                    </div>
                    <div className={"flex items-center"}>
                        <div>     <div>одежда туловище</div>
                        <p>Футболка</p></div>
                        <div className="bg-amber-50 w-[50px] h-[1px]"></div>

                    </div>
                    <div className={"flex items-center"}>
                        <div>
                            <div>ноги одежда</div>
                            <p>Термобелье</p></div>
                        <div className="bg-amber-50 w-[50px] h-[1px]"></div>

                    </div>
                    <div className={"flex items-center"}>
                        <div>   <div>обувь</div>
                        <p>РИКОВЕНСЫ</p></div>
                        <div className="bg-amber-50 w-[50px] h-[1px]"></div>

                    </div>


                </div>
            </div>


        </Block>
    )


}