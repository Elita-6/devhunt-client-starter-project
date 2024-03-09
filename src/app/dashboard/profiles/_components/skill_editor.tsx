"use client"
import SkillSelectionInput from "@/app/dashboard/profiles/_components/skill_selection";
import React , {useState} from "react";
import {SelectableItem} from "@/app/dashboard/profiles/_components/multi_select_input";
import {Button} from "@/components/ui/button";
import {useUpdateUserSkills} from "@/app/dashboard/profiles/_hooks/profile_hook";
import {findAddedAndRemovedItems} from "@/app/_common/utils";


interface ISkillEditor {
    skills: SelectableItem[],
    isOpen: boolean,
    handleIsOpen: () => void,
    profileId: string
}

export function SkillsEditor(props: ISkillEditor) {
    const skills = props.skills.map(skill =>{
         return  {tecnologyId: skill.tecnologyId, technologyDesignation: skill.technologyDesignation}
    })
    const [skillsUpdate, setSkillsUpdate] = useState(skills);
    const {mutate: updateUserSkills, isLoading} = useUpdateUserSkills(props.profileId);

    const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(skillsUpdate, props.skills);
        const originalsId = props.skills.map(s => s.tecnologyId).filter(id => id != undefined);
        const newIds = skillsUpdate.map(su => su.tecnologyId).filter(id => id != undefined);

        const {added, removed} = findAddedAndRemovedItems(originalsId,newIds);
        updateUserSkills({added, removed})

    }
    if(!props.isOpen){
        return ;
    }
    const handleOnSelectedTag = (tag: SelectableItem) => {
        setSkillsUpdate((prev) => [...prev, tag])
    }
    const  handleOnRemoveTag = (tag: SelectableItem) =>  {
        setSkillsUpdate((prevState) => [...prevState.filter(skill=> skill.tecnologyId !== tag.tecnologyId)])
    }

    return(
        <form className="w-full flex flex-col gap-3">
            <SkillSelectionInput onSelectedTags={handleOnSelectedTag} onRemoveTag={handleOnRemoveTag} tags={skillsUpdate} />
            <div className="flex items-center gap-3">
                <Button className="bg-blue-700"  disabled={isLoading} onClick={(e) =>handleSaveClick(e)}>
                    Save changes
                </Button>
                <Button className="bg-gray-400" onClick={props.handleIsOpen}>
                    Cancel
                </Button>
            </div>
        </form>
    )
}
