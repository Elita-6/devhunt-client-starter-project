"use client";
import {SkillsEdit} from "@/app/dashboard/profiles/_components/skills_edit";
import {SkillsBox} from "@/app/dashboard/profiles/_components/skills_box";
import {useState} from "react";
import {SkillsEditor} from "@/app/dashboard/profiles/_components/skill_editor";
import {SelectableItem} from "@/app/dashboard/profiles/_components/multi_select_input";

export  function SkillsContainer({skills}: {skills: SelectableItem[]}) {
    const [open, setOpen] = useState<boolean>(false);
    const handleEditClick = () => {
        setOpen(!open);
    }
    return(
        <div className=" flex flex-col   gap-3 -bottom-6 md:px-[5%] lg:px-[10%]  ml-36 ">
            {/*Skills edit button*/}
            <div className="flex items-center">
                <SkillsEdit onClick={handleEditClick} />
                {/*Skills List*/}
                <div className="flex items-center gap-3 ml-3">
                    {skills.map(skill => (
                            <SkillsBox label={skill.skill_name} key={skill.skill_id} />
                        )
                    )}
                </div>
            </div>
            <SkillsEditor  skills={skills} isOpen={open} handleIsOpen={handleEditClick} />
        </div>
    )
}