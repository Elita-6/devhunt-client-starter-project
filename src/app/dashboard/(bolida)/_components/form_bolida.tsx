import React from 'react';
import {useCreateMessage} from "@/app/dashboard/(bolida)/_hooks/bolida_hooks";
import {SubmitHandler, useForm} from "react-hook-form";
import { NextApiRequest } from "next";
import {Send} from "lucide-react";

interface IFormInput{
    message:string
}
const BolidaForm = () => {
    const getAccessToken = (req: NextApiRequest) => {
        return req.cookies.token;
    };
    const {isSuccess,isLoading,mutate} = useCreateMessage()
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting}
    } = useForm<IFormInput>()
    const onSubmit:SubmitHandler<IFormInput> = async (data)=>{
        mutate(data.message)
        console.log("test")
        if (isSuccess){
            console.log("success")
        }
    }
    return (
            <div className="absolute inset-x-0 bottom-0 z-10  px-4 py-3 w-[30vw]">
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between space-x-6">
                    <input type='text'  placeholder='Type your message here '
                           className='outline-none p-2 input bg-[#E8F4FC] w-[25vw]' {...register("message",{required:true})} />
                    <button type="submit" className="bg-[#0000FF] p-2 rounded-lg">
                        <Send  className="text-white"/>
                    </button>
                </form>
            </div>
    );
};

export default BolidaForm;