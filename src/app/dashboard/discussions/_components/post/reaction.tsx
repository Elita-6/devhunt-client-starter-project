"use client"
import React from 'react';
import {IoIosHeart} from "react-icons/io";
import {useFetchReaction} from "@/app/dashboard/discussions/_hooks/post_hooks";

const Reaction = ({postId,reaction}:{postId:string,reaction:number}) => {
    const{}= useFetchReaction(postId)
    return (
        <button className="flex space-x-3 items-center">
            <IoIosHeart className="text-[#B85252]  " size={24} />
            <span> {reaction} </span>
        </button>
    );
};

export default Reaction;