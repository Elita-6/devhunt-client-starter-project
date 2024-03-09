import {MdOutlineClose} from "react-icons/md";
import React from "react";
import EditProfileForm from "@/app/dashboard/profiles/_components/edit_profile.form";

interface Props{
    HandleClick:()=>void,
    profileId: string
}
const EditProfileModal = (props :Props) => {
    return (
        <div className='overlay' onClick={props.HandleClick}>
            <div className='central flex flex-col p-3 rounded-lg' onClick={(e)=>e.stopPropagation()}>
                <div className='flex justify-end w-full '>
                    <button onClick={props.HandleClick} className="pr-2">
                        <MdOutlineClose className='text-xl dark:text-black'/>
                    </button>
                </div>
                <h3 className='text-xl font-semibold pl-2 dark:text-black'>Edit Profile</h3>
                <EditProfileForm HandleClick={props.HandleClick} profileId={props.profileId} />
            </div>
        </div>
    );
};

export default EditProfileModal;
