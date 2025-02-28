import Block from "@/Components/Block";

export default function InfoBlock(props) {
    return (
        <Block>
            <div className="flex gap-4 h-full items-center w-full ">
                {/* Left side with 2 square blocks */}
                <div className=" w-1/4 h-full  relative">
                    <div className="flex flex-col gap-4   h-full sm:gap-4">
                        <div className="rounded-xl border border-gray-600/30 bg-amber-50/10   h-1/2">
                            a
                        </div>
                        <div className="rounded-xl border border-gray-600/30 bg-amber-50/10  h-1/2">
                            a
                        </div>
                    </div>

                    {/* Right side with 2 square blocks */}


                </div>
                <div className=" w-1/4 h-full  relative">
                    <div className="flex flex-col gap-4   h-full sm:gap-4">
                        <div className="rounded-xl border border-gray-600/30 bg-amber-50/10   h-1/2">
                            a
                        </div>
                        <div className="rounded-xl border border-gray-600/30 bg-amber-50/10   h-1/2">
                            a
                        </div>
                    </div>
                    {/* Right side with 2 square blocks */}


                </div>
                {/* Right side with one large block */}
                <div className=" w-1/2 h-full rounded-xl border border-gray-600/30 bg-amber-50/10">
                    {/* Content for the large block */}
                </div>
            </div>
        </Block>
    );
}