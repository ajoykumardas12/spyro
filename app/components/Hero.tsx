import Image from "next/image";
import { Orbitron } from "next/font/google";
import BrandButton from "./BrandButton";

const orbitron = Orbitron({ 
    subsets: ["latin"],
    variable: "--font-orbitron"
})

function Hero() {
    return (
        <div className="relative w-full">
            <Image
                src="/images/hero-image.png"
                alt="hero background image"
                width={2000}
                height={1900}
                className="w-full"
                priority
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center px-24 py-16 bg-gradient-to-t from-black/20 to-black/20">
                <div className="w-[55%] flex flex-col gap-6 mt-20">
                    <h1 className={`${orbitron.className} text-5xl font-bold tracking-widest leading-[4.2rem]`}>
                        <span 
                            className="text-transparent"
                            style={{WebkitTextStroke: "2px #FF4601", }}
                        >Unleash
                        </span> your<br />
                        Inner Athlete
                    </h1>
                    <p className="text-lg leading-7 tracking-wide text-white/75">Get ready to sweat it out and achieve your fitness goals with our high-energy fitness classes! Our classes are designed to cater to all fitness levels and provide a fun and motivating environment to help you reach your peak performance.</p>
                    {/* <button className="w-40 bg-brand brand-button px-3 py-2 ml-2">
                        
                    </button> */}
                    <BrandButton>
                        Start free trial
                    </BrandButton>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-b from-primaryBg/5 to-primaryBg">
            </div>
        </div>
    );
}

export default Hero;