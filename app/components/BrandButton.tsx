interface BrandButtonProps{
    children: React.ReactNode
}

function BrandButton({children}: BrandButtonProps) {
    return (
        <button className="w-40 bg-brand/50 brand-button">
            <div className="bg-brand px-3 py-2 ">
                {children}
            </div>
        </button>
    );
}

export default BrandButton;