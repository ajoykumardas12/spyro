import { spyroClasses } from "../stores/spyroClasses";
import { SpyroClass } from "../types";
import SpyroClassesCard from "./SpyroClassCard";

function Classes() {
    return (
        <div className="relative px-16 py-10 min-h-[50rem] classes-bg flex flex-col items-center gap-10">
            <h2 className="text-4xl">Classes</h2>
            <div className="flex gap-10">
                {
                    spyroClasses.map((spyroClass: SpyroClass) => {
                        return(
                            <SpyroClassesCard key={spyroClass.name} {...spyroClass} />
                        )
                    })
                }
            </div>
            <button className="bg-brand">See all</button>
        </div>
    );
}
export default Classes;