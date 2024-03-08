"use client"
import React from 'react';
import {useFetchAllPost} from "@/app/dashboard/discussions/_hooks/post_hooks";
import {IPost} from "@/app/dashboard/discussions/_services/definition";
import PostItem from "@/app/dashboard/discussions/_components/post/post_item";
import PostSkeleton from "@/app/dashboard/discussions/_components/post/post_skeleton";

const PostContainer = () => {
    const{data,isSuccess,isLoading}= useFetchAllPost()
    if(isSuccess){
        console.log(data)
    }
    return (
        <div className="px-8 w-full" >
            {
                isLoading && (
                    <div className="space-y-6">
                        <PostSkeleton/>
                        <PostSkeleton/>
                    </div>
                )
            }
            {
                data?.data.map((elem:IPost,key:number)=>(
                    <PostItem key={key} postId={elem.postId} postDescription={elem.postDescription}  dateCreation={elem.dateCreation} user={elem.user} tags={elem.tags} comments={elem.comments} reaction={elem.reaction}/>
                ))
            }
        </div>
    );
};

export default PostContainer;