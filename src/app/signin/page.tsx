import React from 'react';
import ButtonProviders from "@/app/signin/_components/button_provider_list";


export default function SignIn(){

    return (
        <div className='flex flex-col  mt-48  items-center h-screen '>
            <div className='flex flex-col items-center space-y-8  '>
                <div className='flex flex-col space-y-3 items-center'>
                    <h3 className="text-2xl font-semibold">Welcome to MirayApp</h3>
                    <p className='font-light'>Click on continue to  get stared immediately</p>
                </div>
                <div className='w-full flex flex-col space-y-3'>
                    <ButtonProviders/>
                </div>
            </div>
        </div>
    );
};
