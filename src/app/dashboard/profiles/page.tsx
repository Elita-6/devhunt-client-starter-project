import React from 'react';
import UserCard from "@/app/dashboard/profiles/_components/user_card";
import UserWrapper from "@/app/dashboard/profiles/_components/user_wrapper";

const Page = () => {
    return (
        <section>
            <h4 className="text-2xl font-semibold mb-5">Users Lists</h4>
            <UserWrapper />
        </section>
    );
};

export default Page;
