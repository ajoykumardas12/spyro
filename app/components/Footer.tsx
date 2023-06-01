// import footerBg from "/images/footer-bg.png";

import Image from "next/image";

function Footer() {
    return (
        <footer 
            className="bg-no-repeat bg-[length:100%_100%]"
            style={{backgroundImage: "url('/images/footer-bg.png')"}}
        >
            <div className="px-20 pt-10 pb-4 flex flex-col items-center bg-gradient-to-r from-primaryBg/20 to-primaryBg/20">
                <h2 className="text-3xl font-semibold text-brand mb-6">SPYRO</h2>
                <p className="w-7/12 text-base font-light text-center text-white/80 mb-6">
                    Join us today and experience the transformative power of our fitness classes. Don&apos;t wait to start your fitness journey. Take the first step towards a healthier, stronger you. Let&apos;s sweat, have fun, and make fitness a way of life together!
                </p>
                <div className="flex items-center gap-2 mb-6">
                    <FooterSocial src={"/icons/facebook.png"} />
                    <FooterSocial src={"/icons/twitter.svg"} />
                    <FooterSocial src={"/icons/instagram.png"} />
                    <FooterSocial src={"/icons/tiktok.png"} />
                </div>
                <div className="w-11/12 h-[0.05rem] bg-white/70 mb-4"></div>
                <div className="text-white/70 text-sm">
                    &#169; SPYRO 2023. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

interface FooterSocialProps{
    src: string
}

function FooterSocial({src}: FooterSocialProps){
    return(
        <Image 
            src={src}
            alt="social icon"
            width={25}
            height={25}
            className="cursor-pointer"
        />
    )
}

export default Footer;