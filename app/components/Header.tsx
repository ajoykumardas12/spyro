"use client"
import Link from "next/link";
import BrandButton from "./BrandButton";
import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

function Header() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleIsHamburgerOpen = () => {
        setIsHamburgerOpen((prevValue) => {
            return !prevValue;
        })        
    }    
    
    const {width, height} = useWindowSize();

    useEffect(() => {
        if(width > 767){
            setIsHamburgerOpen(false);
        }
    }, [width])


    return (
        <header className="absolute z-40 w-full flex justify-between px-12 sm:px-16 lg:px-24 py-8">
            <Link href="/" className="text-3xl font-extrabold text-brand">
                SPYRO
            </Link>
            <ul className="hidden md:flex items-center gap-8">
                <li className="cursor-pointer">Classes</li>
                <li className="cursor-pointer">Instructors</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Gallery</li>
            </ul>
            <div className="hidden md:flex items-center z-60">
                <BrandButton>
                    Contact Us
                </BrandButton>
            </div>
            <div className={`hamburger-menu md:hidden ${ isHamburgerOpen && "hamburger-open"}`} id="hamburger" onClick={toggleIsHamburgerOpen}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`absolute p-10 bg-brand top-[100%] right-0 rounded-l-md ${ !isHamburgerOpen && "translate-x-[100%] hidden"} transition duration-300`}>
                <ul className="flex flex-col items-center gap-8">
                    <li className="cursor-pointer" onClick={toggleIsHamburgerOpen}>Classes</li>
                    <li className="cursor-pointer" onClick={toggleIsHamburgerOpen}>Instructors</li>
                    <li className="cursor-pointer" onClick={toggleIsHamburgerOpen}>About Us</li>
                    <li className="cursor-pointer" onClick={toggleIsHamburgerOpen}>Gallery</li>
                    <div onClick={toggleIsHamburgerOpen}>
                        <BrandButton>
                            Contact Us
                        </BrandButton>
                    </div>
                </ul>
            </div>
        </header>
    );
}


export default Header;