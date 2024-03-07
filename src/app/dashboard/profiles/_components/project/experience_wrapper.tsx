import {Experience , IExperience} from "@/app/dashboard/profiles/_components/project/experience";
import {users} from "@/app/_common/constants/data";
const experience: IExperience = {
    position_title: "Software Engineer",
    host: "Tech Company",
    description: "Worked on various projects using JavaScript, React, and Node.js.",
    start_date: "2020-06-01",
    end_date: "2022-09-30"
};
export default function ExperienceWrapper({user_id}: {user_id: string}) {
    const user = users.filter(user => user.id == user_id)[0];
    return(
        <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-semibold mb-2">My Experience</h4>
            <div className="w-full grid grid-cols-3 gap-3">
                {
                    user.experiences.map(exp => (
                        <Experience
                            key={exp.position_title}
                            position_title={exp.position_title}
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
