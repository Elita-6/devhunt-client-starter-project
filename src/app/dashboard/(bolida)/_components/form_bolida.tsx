import React from 'react';
import {useCreateMessage} from "@/app/dashboard/(bolida)/_hooks/bolida_hooks";
import {SubmitHandler, useForm} from "react-hook-form";
import {Send} from "lucide-react";
import {CircularProgress} from "@mui/material";

interface IFormInput{
    message:string
}
const BolidaForm = () => {
    const {isSuccess,isLoading,mutate} = useCreateMessage()
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
        reset,
        resetField

    } = useForm<IFormInput>()
    const onSubmit:SubmitHandler<IFormInput> = async (data)=>{
        mutate(data.message)
        console.log("test")
        if (isSuccess){
            resetField("message")
            console.log(data.message)
            reset()
        }
    }
    return (
        <div className="relative">
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between space-x-6 px-4 py-3 w-[30vw] h-[8vh]">
                    <input type='text'  placeholder='Type your message here '
                           className='outline-none p-2 input bg-[#E8F4FC] w-[25vw]' {...register("message",{required:true})} />
                    <button type="submit" disabled={isSubmitting}  className="bg-[#0000FF] p-2 rounded-lg">
                        {
                            isLoading ?(
                                    <div className="flex items-center space-x-2">
                                        <span className="pl-3 text-white text-xs">Loading...</span>
                                        <CircularProgress size={15} />
                                    </div>
                                ):
                                <>
                                    <Send  className="text-white"/>
                                </>
                        }
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BolidaForm;