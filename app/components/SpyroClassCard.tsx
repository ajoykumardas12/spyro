import Image from "next/image";
import { SpyroClass } from "../types";

function SpyroClassesCard(spyroClass: SpyroClass){
    return (
        <div className="flex flex-col items-center gap-4 py-5 cursor-pointer hover:bg-primaryBg/50 rounded-md">
            <div className="relative w-11/12 flex justify-center ">
                <Image 
                    src={spyroClass.imageSrc}
                    alt={spyroClass.name}
                    width={500}
                    height={400}
                    className="z-10 object-cover rounded-lg"
                />
                <div className="absolute w-[102.4%] h-[40%] -bottom-[1.75%] clipped-polygon bg-brand rounded-lg"></div>
                <div className="absolute w-4 h-4 bg-[rgba(22, 39, 39, 0.902)] bottom-[21%] -left-[1.2%]"></div>
                <div className="absolute w-8 h-4 bg-brand bottom-[22%] -left-[1.1%] rounded-ss-lg"></div>
            </div>
            <div className="w-[93%]">
                <div className="flex justify-between mb-3">
                    <div className="flex items-center gap-1">
                        <Dot color="brand" />
                        <div>
                            {spyroClass.category}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image 
                            src="/icons/users.svg"
                            alt="students icon"
                            width={20}
                            height={20}
                            className=""
                        />
                        <div>
                            {spyroClass.noOfStudents} students
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mb-3">
                    <h3 className="text-2xl">
                        {spyroClass.name}
                    </h3>
                    <div className="flex items-center gap-2">
                        <Image 
                            src="/icons/timer.svg"
                            alt="timer icon"
                            width={20}
                            height={20}
                            className=""
                        />
                        <div>{spyroClass.duration} H</div>
                    </div>
                </div>
                <div className="mb-2">
                    Instructor: {spyroClass.instructor}
                </div>
                <div className="flex items-center gap-2 mb-1">
                    <Dot color="white" />
                    <div>No. of Classes: {spyroClass.noOfClasses}</div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <Dot color="white" />
                    <div>Difficulty: {spyroClass.difficulty}</div>
                </div>
                <div className="flex justify-between px-2">
                    <button className="bg-gradient-to-r from-brand/90 to-brand parallelogram px-3 py-2 ml-2 text-sm hover:from-brand hover:to-brand">
                        <div>
                            Learn more
                        </div>
                    </button>
                    <button className="parallelogram px-4 py-2 text-sm border border-white mr-2">
                        <div>
                            Start a free trial
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

interface DotProps{
    color: "white" | "brand"
}

function Dot({ color }: DotProps) {
    if(color === "white"){
        return <div className="w-2 h-2 rounded-full bg-white"></div>;
    }else if( color === "brand"){
        return <div className="w-2 h-2 rounded-full bg-brand"></div>;
    }
    return <div>Invalid color</div>;
}

export default SpyroClassesCard;