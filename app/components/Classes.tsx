import { spyroClasses } from "../stores/spyroClasses";
import { SpyroClass } from "../types";
import BrandButton from "./BrandButton";
import SpyroClassesCard from "./SpyroClassCard";

function Classes() {
    return (
        <div className="relative px-16 py-10 texture-bg flex flex-col items-center gap-10">
            <h2 className="text-4xl">Classes</h2>
            <div className="flex gap-10 mb-2">
                {
                    spyroClasses.map((spyroClass: SpyroClass) => {
                        return(
                            <SpyroClassesCard key={spyroClass.name} {...spyroClass} />
                        )
                    })
                }
            </div>
            <BrandButton>
                See all
            </BrandButton>
        </div>
    );
}
export default Classes;