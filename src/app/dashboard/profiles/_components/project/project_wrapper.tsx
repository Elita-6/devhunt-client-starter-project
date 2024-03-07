import {ProjectCard} from "@/app/dashboard/profiles/_components/project/card";
import {users} from "@/app/_common/constants/data";


export function ProjectWrapper({user_id}: {user_id: string}) {
    const user = users.filter(user => user.id == user_id)[0];
    return(
        <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-semibold">My side Project</h4>
            <div className="grid grid-cols-4 ">
                {
                    user.projects.map(project => (
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
