import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {
    useCreateExperience ,
    useFetchAllParcours ,
    useUpdateProfile
} from "@/app/dashboard/profiles/_hooks/profile_hook";
import {CreateExperienceDTO} from "@/app/dashboard/profiles/_services/experience_service";
import {Input} from "@/components/ui/input";


interface Props {
    HandleClick:()=>void,
    profileId: string
}
const CreateExperienceForm = (props:Props) => {
    const{mutate: updateExperience,isSuccess,isLoading}=  useCreateExperience(props.profileId)
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
        reset,
        resetField
    } = useForm<CreateExperienceDTO>()
    const onSubmit:SubmitHandler<CreateExperienceDTO> = async (data)=>{
        updateExperience({
            profileId: props.profileId ,
            experiencePost: data.experiencePost ,
            experienceDescription: data.experienceDescription ,
            experienceLocal: data.experienceLocal ,
            dateStart: data.dateStart,
            dateEnd: data.dateEnd
        })
        if (isSuccess){
            resetField("experienceDescription")
            resetField("experiencePost")
            resetField("experienceLocal")
            resetField("dateStart")
            resetField("dateEnd")
            props.HandleClick()
            reset()
            console.log("success")
        }
    }
    return (
        <form className='flex flex-col space-y-3 w-full p-3'  onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='design' className="dark:text-black">Position</label>
                <input type='text'  placeholder='type your position here '
                       className='outline-none dark:text-black p-2 input bg-[#E8F4FC]'  {...register("experiencePost",{required: true})} />
            </div>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='design' className="dark:text-black">Host</label>
                <input type='text'  placeholder='type the host here '
                       className='outline-none dark:text-black p-2 input bg-[#E8F4FC]'  {...register("experienceLocal",{required: true})} />
            </div>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='design' className="dark:text-black">Experience Description</label>
                <input type='text'  placeholder='describe your experience '
                       className='outline-none dark:text-black p-2 input bg-[#E8F4FC]'  {...register("experienceDescription", {required: true})} />
            </div>
            <div className="w-full flex justify-between  items-center gap-3 ">
                <div className="grid w-full  items-center gap-1.5">
                    <label htmlFor='design' className="dark:text-black">Start Date</label>
                    <Input type='date'  placeholder='Start data '
                           className='outline-none dark:text-black p-2 input bg-[#E8F4FC]'  {...register("dateStart", {required: true})} />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                    <label htmlFor='design' className="dark:text-black">End Date</label>
                    <Input type='date'  placeholder='End date '
                           className='outline-none dark:text-black p-2 input bg-[#E8F4FC]'  {...register("dateEnd", {required: true})} />
                </div>
            </div>
            <button type='submit' className='bg-[#0000FF] w-full text-white py-3'
                    disabled={isLoading}
            >
                {isLoading ? <span>Loading..</span>:   "Create Experience" }
                { isSuccess ? <span>Created</span>: ""}

            </button>
            <button type='reset' onClick={props.HandleClick}  className='bg-[#F2F2F2] w-full text-[#0F172A] py-3'>
                Cancel
            </button>
        </form>
    );
};

export default CreateExperienceForm;
