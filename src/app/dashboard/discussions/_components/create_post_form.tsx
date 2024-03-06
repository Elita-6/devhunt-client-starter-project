import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import TagSelectionInput from "@/app/dashboard/discussions/_components/tag_selection";
import { ITag } from '../_services/definition';

interface IFormInput{
    design:string
    rent:number
}
interface Props {
    HandleClick:()=>void
}
const CreatePostForm = (props:Props) => {
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
        formState:{errors,isSubmitting}
    } = useForm<IFormInput>()
    const onSubmit:SubmitHandler<IFormInput> = async (data)=>{
        // mutate(data)
        // if (isSuccess){
        //     console.log("success")
        // }
    }
    return (
        <form className='flex flex-col space-y-3 w-full p-3'  onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='design'>Title</label>
                <input type='text'  placeholder='type your title here'
                       className='outline-none p-2 input bg-[#E8F4FC]'  {...register("design",{required:true})} />
                {errors.design && <span className='text-red-600'> This field is required</span>}
            </div>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='rent'>Description</label>
                <input type='text'  placeholder='type your title here'
                       className='outline-none p-2 input  bg-[#E8F4FC]' {...register("rent",{required:true})} />
                {errors.rent && <span className='text-red-600'> This field is required</span>}
            </div>
            <div className="w-full">
                <TagSelectionInput onSelectedTags={handleSelectTags} onRemoveTag={handleRemoveTag} tags={tags}/>
            </div>
            <button type='submit' className='bg-[#0000FF] w-full text-white py-2'
                disabled={isSubmitting ? true : false}
            >
                Create post
            </button>
            <button type='reset' onClick={props.HandleClick}  className='bg-[#F2F2F2] w-full text-[#0F172A] py-2'>
                Cancel
            </button>
        </form>
    );
};

export default CreatePostForm;