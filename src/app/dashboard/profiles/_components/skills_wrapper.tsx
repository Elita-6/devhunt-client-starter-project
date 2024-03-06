"use client";
import {SkillsEdit} from "@/app/dashboard/profiles/_components/skills_edit";
import {SkillsBox} from "@/app/dashboard/profiles/_components/skills_box";
import {useState} from "react";

interface ISkill {
    skill_id: string,
    skill_name: string
}
export function SkillsWrapper(skills: ISkill[]) {
    const [open, setOpen] = useState<boolean>(false);
    const handleEditClick = () => {
        setOpen(!open);
    }
    return(
        <div className=" flex items-center  gap-3 -bottom-6 md:px-[5%] lg:px-[10%]  ml-36 ">
            {/*Skills edit button*/}
            <SkillsEdit onClick={handleEditClick} />
            {/*Skills List*/}
            <div className="flex items-center gap-3 ml-3">
                {skills.map(skill => {
                    return(
                        <SkillsBox label="reactjs" key={skill.skill_id} />
                    )
                })}
            </div>
        </div>
    )
}
