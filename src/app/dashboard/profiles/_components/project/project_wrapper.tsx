import {ProjectCard} from "@/app/dashboard/profiles/_components/project/card";
import {users} from "@/app/_common/constants/data";
import {CreateProject} from "@/app/dashboard/profiles/_components/project/create_project";


export function ProjectWrapper({profileId}: {profileId: string}) {

   const user = users[1]
    return(
        <div className="flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
                <h4 className="text-2xl font-semibold">My side Project</h4>
                <CreateProject profileId={profileId} />
            </div>
            <div className="grid grid-cols-4 ">
                {/*
                    user.projects.map(project => (
                        <ProjectCard
                            key={project.description}
                            title={project.title}
                            url=""
                            github_url={project.github_url}
                            site_url={project.website_url}
                            description={project.description}

                        />
                    ))*/
                }
                {
                    user.projects.map(project =>(
                        <ProjectCard
                            key={project.description}
                            title={project.title}
                            url=""
                            github_url={project.github_url}
                            site_url={project.website_url}
                            description={project.description}
                        />
                    ))
                }
            </div>
        </div>



    )
}
