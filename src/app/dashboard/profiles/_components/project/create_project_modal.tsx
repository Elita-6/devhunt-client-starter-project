import {MdOutlineClose} from "react-icons/md";
import React from "react";
import CreateExperienceForm from "@/app/dashboard/profiles/_components/create_experience.form";

interface Props{
    HandleClick:()=>void,
    profileId: string
}
const CreateProjectModal = (props :Props) => {
    return (
        <div className='overlay' onClick={props.HandleClick}>
            <div className='central flex flex-col p-3 rounded-lg' onClick={(e)=>e.stopPropagation()}>
                <div className='flex justify-end w-full '>
                    <button onClick={props.HandleClick} className="pr-2">
                        <MdOutlineClose className='text-xl dark:text-black'/>
                    </button>
                </div>
                <h3 className='text-xl font-semibold pl-2 dark:text-black'>CREATE PROJECT</h3>
                <CreateExperienceForm HandleClick={props.HandleClick} profileId={props.profileId} />
            </div>
        </div>
    );
};

export default CreateProjectModal;
