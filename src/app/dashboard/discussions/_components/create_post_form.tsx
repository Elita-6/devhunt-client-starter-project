import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import TagSelectionInput from "@/app/dashboard/discussions/_components/tag_selection";
import { ITag } from '../_services/definition';
import {useCreatePost} from "@/app/dashboard/discussions/_hooks/post_hooks";
import {CircularProgress} from "@mui/material";

interface IFormInput{
    postTitle: string
    postDescription:string
}
interface Props {
    HandleClick:()=>void
}
const CreatePostForm = (props:Props) => {
    const{mutate,isSuccess,isLoading}=useCreatePost()
    const [tags, setTags] = useState<ITag[]>([]);
    const handleRemoveTag = (tagToRemove: ITag) => {
        setTags(prevState => prevState.filter(tag => tag.tagId !== tagToRemove.tagId))
    }
    const handleSelectTags = (selectedTag: ITag) => {
        const isAlreadySelected = tags.some(tag => tag.tagId === selectedTag.tagId)
        if(isAlreadySelected){
            return
        }
        setTags(prevState => [...prevState,selectedTag])
    }

    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
        reset,
        resetField
    } = useForm<IFormInput>()
    const onSubmit:SubmitHandler<IFormInput> = async (data)=>{
        const tagIds = tags.map(tag => tag.tagId);
        mutate({
            postTitle:data.postTitle,
            postDescription:data.postDescription,
            tags:tagIds
        })
            resetField("postTitle")
            resetField("postDescription")
        if (isSuccess){
        props.HandleClick()
            console.log("success")
        }
    }
    return (
        <form className='flex flex-col space-y-3 w-full p-3'  onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='design' className="dark:text-black">Title</label>
                <input type='text'  placeholder='type your title here'
                       className='outline-none dark:text-black p-2 input bg-[#E8F4FC]'  {...register("postTitle",{required:true})} />
                {errors.postTitle && <span className='text-red-600'> This field is required</span>}
            </div>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='rent' className="dark:text-black">Description</label>
                <input type='text'  placeholder='type your title here'
                       className='outline-none p-2 text-black input  bg-[#E8F4FC]' {...register("postDescription",{required:true})} />
                {errors.postDescription && <span className='text-red-600'> This field is required</span>}
            </div>
            <div className="w-full">
                <TagSelectionInput onSelectedTags={handleSelectTags} onRemoveTag={handleRemoveTag} tags={tags}/>
            </div>
            <button type='submit' className='bg-[#0000FF] w-full text-white py-3'
                disabled={isLoading}

            >
                {
                    isLoading ?(
                            <div className="flex items-center space-x-2">
                                <span className="pl-3 text-white text-xs">Loading...</span>
                                <CircularProgress size={15} />
                            </div>
                    ):
                        <>
                            Create post
                        </>
                }
            </button>
            <button type='reset' onClick={props.HandleClick}  className='bg-[#F2F2F2] w-full text-[#0F172A] py-3'>
                Cancel
            </button>
        </form>
    );
};

export default CreatePostForm;