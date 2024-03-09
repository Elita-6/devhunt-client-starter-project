"use client";
import {SkillsEdit} from "@/app/dashboard/profiles/_components/skills_edit";
import {SkillsBox} from "@/app/dashboard/profiles/_components/skills_box";
import {Key, useState} from "react";
import {SkillsEditor} from "@/app/dashboard/profiles/_components/skill_editor";
import {SelectableItem} from "@/app/dashboard/profiles/_components/multi_select_input";
import {useFetchUserSkills} from "@/app/dashboard/profiles/_hooks/profile_hook";

export function SkillsContainer({profileId}: { profileId: string }) {
    const [open , setOpen] = useState<boolean>(false);
    const handleEditClick = () => {
        setOpen(!open);
    }
    const {data: skills, isSuccess} = useFetchUserSkills(profileId);

    return (
        <div className=" flex flex-col   gap-3 -bottom-6 md:px-[5%] lg:px-[10%]  ml-36 ">

            <div className="flex items-center">
                <SkillsEdit onClick={handleEditClick}/>
                <div className="flex items-center gap-3 ml-3">
                    {
                        skills?.data.length > 0 &&

                        skills?.data.map((skill: { technologyDesignation: string; technologyId: Key | null | undefined; }) => (
                                    <SkillsBox label={skill.technologyDesignation} key={skill.technologyId} />
                                )
                        )
                    }

                </div>
            </div>
            {
                isSuccess &&  <SkillsEditor  skills={skills?.data.length > 0 ? skills?.data : []} isOpen={open} handleIsOpen={handleEditClick} profileId={profileId} />
            }

        </div>
    )
}
