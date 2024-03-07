"use client"
import React from 'react';
import {useFetchAllPost} from "@/app/dashboard/discussions/_hooks/post_hooks";
import {IPost} from "@/app/dashboard/discussions/_services/definition";
import PostItem from "@/app/dashboard/discussions/_components/post/post_item";

const posts: IPost[] = [
    {
        postId: "1",
        postDescription: "\"Welcome to our Student Discussion Hub! 🎓 Join the conversation where  students from all disciplines gather to share insights, ask questions,  and connect with peers. From study tips to academic queries, internship  opportunities to campus events, this is your go-to platform for all  things student life.",
        postTitle: "First Post",
        dateCreation: "2024-03-06",
        user: {
            userId: "1",
            userName: "Riry Nomenjanahary",
            profileUrl: "https://avatars.githubusercontent.com/u/105585077?v=4"
        },
        tags: ["tag1", "tag2"],
        comments: [
            {
                content: "Great post!",
                user: {
                    userId: "2",
                    userName: "Nomena Andrianiana",
                    profileUrl: "https://avatars.githubusercontent.com/u/107101235?v="
                },
                dateComment: "2024-03-06"
            },
            {
                content: "I agree!",
                user: {
                    userId: "3",
                    userName: "Nomena Andrianiana",
                    profileUrl: "https://avatars.githubusercontent.com/u/107101235?v="
                },
                dateComment: "2024-03-06"
            }
        ],
        reaction :["","",""]
    },
];

const PostContainer = () => {
    const{data,isLoading}= useFetchAllPost()

    return (
        <div className="px-8">
            {
                posts.map((elem,key)=>(
                    <PostItem key={key} postId={elem.postId} postDescription={elem.postDescription} postTitle={elem.postTitle} dateCreation={elem.dateCreation} user={elem.user} tags={elem.tags} comments={elem.comments} reaction={elem.reaction}/>
                ))
            }
        </div>
    );
};

export default PostContainer;