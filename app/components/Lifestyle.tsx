import Image from "next/image";

function Lifestyle() {
    return (
        <div className="flex flex-col items-center gap-8 mb-16">
            <h2 className="text-3xl font-semibold">
                Fit for your lifestyle
            </h2>
            <p className="w-6/12 text-center">
                Wake up with a sunrise meditation, sweat it out with lunchtime HIIT, or unwind with an evening flow. You’ll find movement for every mood with classes sorted by time, style, and skill level.
            </p>
            <div className="relative w-[40%] flex justify-center ">
                <Image 
                    src="/images/lifestyle-image.png"
                    alt="lifestyle image"
                    width={500}
                    height={400}
                    className="w-full z-10 rounded-b-sm"
                />
                <div className="absolute w-[104%] h-[40%] -bottom-[2.1%] lifestyle-polygon bg-brand rounded-xl"></div>
                <div className="absolute w-4 h-4 bg-primaryBg bottom-[20.1%] -left-[2%]"></div>
                <div className="absolute w-8 h-4 bg-brand bottom-[20.1%] -left-[2%] rounded-ss-xl"></div>
            </div>
        </div>
    );
}

export default Lifestyle;