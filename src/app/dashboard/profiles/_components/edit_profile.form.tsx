import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useFetchAllParcours , useUpdateProfile} from "@/app/dashboard/profiles/_hooks/profile_hook";

interface IFormInput{
    description?: string,
    parcourId?: string,
    portID?: string,
    linkGithub?: string,
    linkPortfolio?: string,
    linkLinkedin?: string,
    level?: string,
}
interface Props {
    HandleClick:()=>void,
    profileId: string
}
const EditProfileForm = (props:Props) => {
    const{mutate: updateProfile,isSuccess,isLoading}=useUpdateProfile(props.profileId);
    const  {data: parcours, isLoading: parcoursLoading, isSuccess: parcoursSucces} = useFetchAllParcours();
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
        reset,
        resetField
    } = useForm<IFormInput>()
    const onSubmit:SubmitHandler<IFormInput> = async (data)=>{
        updateProfile({
            linkLinkedin: data.linkLinkedin,
            linkPortfolio: data.linkPortfolio,
            linkGithub: data.linkGithub,
            parcourId: data.parcourId,
            level: data.level
        })
        if (isSuccess){
            resetField("description")
            resetField("parcourId")
            resetField("linkGithub")
            resetField("linkPortfolio")
            resetField("linkLinkedin")
            resetField("level")
            props.HandleClick()
            reset()
            console.log("success")
        }
    }
    return (
        <form className='flex flex-col space-y-3 w-full p-3'  onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='design' className="dark:text-black">Bio</label>
                <input type='text'  placeholder='type your bio here '
                       className='outline-none dark:text-black p-2 input bg-[#E8F4FC]'  {...register("description")} />
            </div>
            <div className="w-full grid grid-cols-2  gap-2">
                <div className="">
                    <label htmlFor='' className="dark:text-black">Github</label>
                    <input type='text'  placeholder='Your github url'
                           className='outline-none p-2 text-black w-full  bg-[#E8F4FC]' {...register("linkGithub")} />
                </div>
                <div className=" ">
                    <label htmlFor='rent' className="dark:text-black">Portfolio</label>
                    <input type='text'  placeholder='Your portfolio url'
                           className='outline-none p-2 text-black w-full bg-[#E8F4FC]' {...register("linkPortfolio")} />
                </div>
                <div className="">
                    <label htmlFor='rent' className="dark:text-black">LinkedIn</label>
                    <input type='text'  placeholder='Your linkedIn url'
                           className='outline-none p-2 text-black w-full   bg-[#E8F4FC]' {...register("linkLinkedin")} />
                </div>

            </div>
            <div className="w-full flex justify-between  items-center gap-3 ">
                <div className="grid w-full  items-center gap-1.5">
                    <label htmlFor='rent' className="dark:text-black">Level</label>
                    <select
                        {...register("level")}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="L1">L1</option>
                        <option value="L2">L2</option>
                        <option value="L3">L3</option>
                        <option value="M1">M1</option>
                        <option value="M2">M2</option>
                    </select>
                </div>
                <div className="w-full items-center gap-1.5">
                    <label htmlFor='rent' className="dark:text-black">Parcours</label>
                    <select
                        {...register("parcourId")}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        {
                            parcours?.data && (
                                parcours?.data.map((data: { parcourId: string; parcourDesign: string }) => (
                                    <option value={data.parcourId} key={data.parcourId}>{data.parcourDesign}</option>
                                ))
                            )
                        }

                    </select>
                </div>
            </div>
            <button type='submit' className='bg-[#0000FF] w-full text-white py-3'
                    disabled={isLoading}
            >
                {isLoading ? <span>Loading..</span>: " Edit post"}

            </button>
            <button type='reset' onClick={props.HandleClick}  className='bg-[#F2F2F2] w-full text-[#0F172A] py-3'>
                Cancel
            </button>
        </form>
    );
};

export default EditProfileForm;
