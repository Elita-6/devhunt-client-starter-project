import {ProjectCard} from "@/app/dashboard/profiles/_components/project/card";

export function ProjectWrapper() {

    return(
        <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-semibold">My side Project</h4>
            <div className="grid grid-cols-4 ">
                <ProjectCard title="Chat application" url="" />
                <ProjectCard title="Chat application" url="" />
                <ProjectCard title="Chat application" url="" />
                <ProjectCard title="Chat application" url="" />
            </div>
        </div>



    )
}
