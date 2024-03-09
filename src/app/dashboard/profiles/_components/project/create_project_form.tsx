import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {
    useCreateExperience , useCreateProject ,
} from "@/app/dashboard/profiles/_hooks/profile_hook";

import {Input} from "@/components/ui/input";
import {CreateProjectDTO} from "@/app/dashboard/profiles/_services/project_service";


interface Props {
    HandleClick:()=>void,
    profileId: string
}
const CreateProjectForm = (props:Props) => {
    const{mutate: createProject,isSuccess,isLoading}=  useCreateProject(props.profileId)
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
        reset,
        resetField
    } = useForm<CreateProjectDTO>()
    const onSubmit:SubmitHandler<CreateProjectDTO> = async (data)=>{
        createProject({
            title: data.title,
            endDate: data.endDate,
            startDate: data.startDate,
            projectDescription: data.projectDescription

        })
        if (isSuccess){
            resetField("projectDescription")
            resetField("title")
            resetField("endDate")
            resetField("startDate")
            resetField("imageUrl")
            props.HandleClick()
            reset()
            console.log("success")
        }
    }
    return (
        <form className='flex flex-col space-y-3 w-full p-3'  onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='design' className="dark:text-black">Title</label>
                <input type='text'  placeholder='title of your project here '
                       className='outline-none dark:text-black p-2 input bg-[#E8F4FC]'  {...register("title",{required: true})} />
            </div>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='design' className="dark:text-black">Description</label>
                <input type='text'  placeholder='discribe your project here '
                       className='outline-none dark:text-black p-2 input bg-[#E8F4FC]'  {...register("projectDescription",{required: true})} />
            </div>
            <div className="w-full flex justify-between  items-center gap-3 ">
                <div className="grid w-full  items-center gap-1.5">
                    <label htmlFor='design' className="dark:text-black">Start Date</label>
                    <Input type='date'  placeholder='Start data '
                           className='outline-none dark:text-black p-2 input bg-[#E8F4FC]'  {...register("startDate", {required: true})} />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                    <label htmlFor='design' className="dark:text-black">End Date</label>
                    <Input type='date'  placeholder='End date '
                           className='outline-none dark:text-black p-2 input bg-[#E8F4FC]'  {...register("endDate", {required: true})} />
                </div>
            </div>
            <button type='submit' className='bg-[#0000FF] w-full text-white py-3'
                    disabled={isLoading}
            >
                {isLoading ? <span>Loading..</span>:   "Create Project" }
                { isSuccess ? <span>Created</span>: ""}

            </button>
            <button type='reset' onClick={props.HandleClick}  className='bg-[#F2F2F2] w-full text-[#0F172A] py-3'>
                Cancel
            </button>
        </form>
    );
};

export default CreateProjectForm;
