import React from 'react';
import CreatePostBar from "@/app/dashboard/discussions/_components/create_post_bar";
import ButtonTabList from "@/app/dashboard/discussions/_components/button_tab_list";
import PostContainer from "@/app/dashboard/discussions/_components/post/post_container";
import LeftFilterContainer from "@/app/dashboard/discussions/_components/left_filter/left_filter_container";

const Page = () => {
    return (
        <div className="flex justify-between px-3">
            <div className="w-[70%] flex flex-col space-y-3 ">
                <h3 className="font-semibold">
                   Discussions
                </h3>
                <CreatePostBar/>
                <div className="flex justify-end ">
                    <ButtonTabList/>
                </div>
                <PostContainer/>
            </div>
            <LeftFilterContainer/>
        </div>
    );
};

export default Page;