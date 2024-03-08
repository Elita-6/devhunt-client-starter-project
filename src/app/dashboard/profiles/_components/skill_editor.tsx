"use client"
import SkillSelectionInput from "@/app/dashboard/profiles/_components/skill_selection";
import {useState} from "react";
import {SelectableItem} from "@/app/dashboard/profiles/_components/multi_select_input";
import {Button} from "@/components/ui/button";

interface ISkillEditor {
    skills: SelectableItem[],
    isOpen: boolean,
    handleIsOpen: () => void
}

export function SkillsEditor(props: ISkillEditor) {

    const [skillsUpdate, setSkillsUpdate] = useState(props.skills);
    if(!props.isOpen){
        return ;
    }
    const handleOnSelectedTag = (tag: SelectableItem) => {
        setSkillsUpdate((prev) => [...prev, tag])
    }
    const  handleOnRemoveTag = (tag: SelectableItem) =>  {
        setSkillsUpdate((prevState) => [...prevState.filter(skill=> skill.skill_id !== tag.skill_id)])
    }
    return(
        <form className="w-full flex flex-col gap-3">
            {/*<SkillSelectionInput onSelectedTags={handleOnSelectedTag} onRemoveTag={handleOnRemoveTag} tags={skillsUpdate} />*/}
            <div className="flex items-center gap-3">
                <Button className="bg-blue-700">
                    Save changes
                </Button>
                <Button className="bg-gray-400" onClick={props.handleIsOpen}>
                    Cancel
                </Button>
            </div>
        </form>
    )
}
