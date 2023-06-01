import BrandButton from "./BrandButton";

function Header() {
    return (
        <header className="absolute z-10 w-full flex justify-between px-24 py-8">
            <div className="text-3xl font-extrabold text-brand">
                SPYRO
            </div>
            <ul className="flex items-center gap-8">
                <li>Classes</li>
                <li>Team</li>
                <li>About Us</li>
                <li>Gallery</li>
            </ul>
            <BrandButton>
                Contact Us
            </BrandButton>
        </header>
    );
}

export default Header;