import React from 'react';
import ButtonProviders from "@/app/signin/_components/button_provider_list";


export default function SignIn(){

    return (
        <div className='flex flex-col items-center space-y-8 '>
            <h2 className="text-4xl font-bold">.Logo</h2>
            <div className='flex flex-col space-y-3 items-center'>
                <h3 className="text-2xl font-semibold">Lets get started</h3>
                <p className='font-light'>Sign up to the family and get stared immediately</p>
            </div>
            <div className='flex flex-col space-y-2 w-[25%]'>
                <ButtonProviders/>
            </div>
        </div>
    );
};
