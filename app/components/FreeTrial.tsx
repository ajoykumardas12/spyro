function FreeTrial() {
    return (
        <div className="w-full px-20 py-10 texture-bg flex flex-col items-center">
            <div className="w-10/12 parallelogram pl-20 pr-10 py-5 flex items-center justify-between bg-brand">
                <div className="w-7/12">
                    <h3 className="text-3xl font-medium mb-2">
                        Are you ready to change?
                    </h3>
                    <p className="text-sm">
                        Challenge your strength. Stretch your body. Breathe easy. Our team of world-class instructors will empower
                    </p>
                </div>
                <button className="nested-parallelogram px-8 py-2 border-[2px] border-white mr-2">
                    <div>
                    Start your Free Trial
                    </div>
                </button>
            </div>
        </div>
    );
}

export default FreeTrial;