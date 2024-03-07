import React from 'react';
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const HeroPage = () => {
    return (
        <div className='flex flex-col items-center text-center mt-20 mb-10 mx-[25vw] space-y-4'>
            <h1 className='text-[50px] font-bold leading-tight'>
                Where the joy of learn meets the power of community
            </h1>
            <h3 className='font-light'>
                Dive deep in immersive, interactive small groups. Expand horizons, engage in discussions, and elevate your learning journey with us.
            </h3>
            <Button variant='default' className='text-xs'>
                Start your travel
            </Button>
            {/* <Button variant='ghost' className=' flex items-center space-x-2'>
                <span>
                    watch video
                </span>
                <MoveRight />
            </Button> */}
        </div>
    );
};

export default HeroPage;