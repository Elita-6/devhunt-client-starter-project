import React from 'react';
import CreatePostBar from "@/app/dashboard/discussions/_components/create_post_bar";
import ButtonTabList from "@/app/dashboard/discussions/_components/button_tab_list";
import PostContainer from "@/app/dashboard/discussions/_components/post/post_container";

const Page = () => {
    return (
        <div className="flex space-x-3 px-3">
            <div className="w-[65%] flex flex-col space-y-3 ">
                <h3 className="font-semibold">
                   Discussions
                </h3>
                <CreatePostBar/>
                <div className="flex justify-end ">
                    <ButtonTabList/>
                </div>
                <PostContainer/>
            </div>
            <div className="w-[10%]">

            </div>
        </div>
    );
};

export default Page;