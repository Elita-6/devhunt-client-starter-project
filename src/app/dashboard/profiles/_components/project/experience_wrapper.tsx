import {Experience , IExperience} from "@/app/dashboard/profiles/_components/project/experience";
import {users} from "@/app/_common/constants/data";
import {useFetchUserExperience} from "@/app/dashboard/profiles/_hooks/profile_hook";
import {CreateExperience} from "@/app/dashboard/profiles/_components/create_experience";
import { Key } from "react";

export default function ExperienceWrapper({profileId}: { profileId: string }) {
    const {data: experiences} = useFetchUserExperience(profileId);
    const user = users[1];
    return (
        <div className="flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
                <h4 className="text-2xl font-semibold mb-2">My Experience</h4>
                <CreateExperience profileId={profileId}/>
            </div>

            <div className="w-full grid grid-cols-3 gap-3">

                {
                    experiences?.data.length > 0 ? (
                        experiences?.data.map((exp: { experienceId: string, experiencePost: string; experienceLocal: string; experienceDescription: string; dateEnd: string; dateStart: string; }) => (
                           <Experience
                               key={exp.experienceId}
                               position_title={exp.experiencePost}
                               host={exp.experienceLocal}
                               description={exp.experienceDescription}
                               end_date={exp.dateEnd}
                               start_date={exp.dateStart}
                           />
                       ))

                    ): ""

                }
                {
                    experiences?.data.length == 0 && (
                        <div className="w-full flex justify-center ">
                            No experience
                        </div>
                    )
                }
                {
                    user.experiences.map(exp => (
                        <Experience
                            key={exp.description}
                            position_title=""
                            host={exp.host}
                            description={exp.description}
                            end_date={exp.end_date}
                            start_date={exp.start_date}
                        />
                    ))
                }

            </div>

        </div>
    )
}
