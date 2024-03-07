import React from 'react';
import {MdOutlineClose} from "react-icons/md";
import CreatePostForm from "@/app/dashboard/discussions/_components/create_post_form";
interface Props{
    HandleClick:()=>void
}
const CreatePostModal = (props :Props) => {
    return (
        <div className='overlay' onClick={props.HandleClick}>
            <div className='central flex flex-col p-3' onClick={(e)=>e.stopPropagation()}>
                <div className='flex justify-end w-full '>
                    <button onClick={props.HandleClick} className="pr-2">
                        <MdOutlineClose className='text-xl'/>
                    </button>
                </div>
                <h3 className='text-xl font-semibold pl-2 '>CREATE POST</h3>
                <CreatePostForm HandleClick={props.HandleClick}/>
            </div>
        </div>
    );
};

export default CreatePostModal;