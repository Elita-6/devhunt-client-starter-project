import React from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";


const HeroPage = () => {
    return (
        <div className="flex justify-between px-[10%] space-x-14 mt-32">
            <div className='flex flex-col items-start  text-center    gap-7'>
                <div className="flex flex-col items-start gap-3">
                    <h1 className='text-[2.5rem] text-start font-bold leading-tight w-[16ch] md:w-[24ch] text-primary lg:max-w-[28ch]'>
                        Start your journey of student immersion easily with Miray App
                    </h1>
                    <p className='text-lg text-start max-w-[54ch]'>
                        Dive deep in immersive, interactive small groups. Expand horizons, engage in discussions, and elevate your learning journey with us.
                    </p>
                </div>
                <Button  className='text-lg'>
                    Get started
                </Button>
            </div>
            <div className="-mt-12">
                <Image
                    alt="bg svg"
                    src="/bg_2.png"
                    width={650}
                    height={650}
                    quality={100}
                />
            </div>
        </div>


    );
};

export default HeroPage;
