
import { Links } from "./nav_link"
import { LinkedIconButton } from "./linked_icon_button"

export const LeftBarNavigation = () => {
    return (
        <div className="flex flex-col items-center bg-[#FBF9F9] border-r-2 border-gray-300 h-screen border-opacity-50 pt-16 space-y-2.5 w-60">
            {
                Links.map((link, index) => (
                    <LinkedIconButton href={link.href} icon={link.icon} key={index} name={link.name} />
                ))
            }
        </div>
    )
}

// import React from 'react';
// import { useSession } from "next-auth/react";
// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
// import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
// import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import Link from 'next/link';

// const LeftBarNavigation = () => {
//     const session = useSession()
//     return (
//         <div className='flex flex-col justify-start items-center'>
//             <div className="mt-4">
//                 <Link
//                     href="/dashboard"
//                     className="flex justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
//                 >
//                     <GridViewOutlinedIcon className='text-2xl text-gray-200 group-hover:text-white' />
//                     <p className='text-base text-white font-semibold'>
//                         Dashboard
//                     </p>
//                 </Link>
//             </div>
//             <div className="mt-4">
//                 <Link
//                     href="/forum"
//                     className="flex justify-start items-center gap-4 pl-0 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
//                 >
//                     <QuestionMarkOutlinedIcon className='text-2xl text-gray-200 group-hover:text-white' />
//                     <p className='text-base text-white font-semibold'>
//                         Forum
//                     </p>
//                 </Link>
//             </div>
//             <div className="mt-4">
//                 <Link
//                     href="/ressources"
//                     className="flex justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
//                 >
//                     <SchoolOutlinedIcon className='text-2xl text-gray-200 group-hover:text-white' />
//                     <p className='text-base text-white font-semibold'>
//                         Ressources
//                     </p>
//                 </Link>
//             </div>
//             <div className="mt-4">
//                 <Link
//                     href="/roadmap"
//                     className="flex justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
//                 >
//                     <AccountTreeOutlinedIcon className='text-2xl text-gray-200 group-hover:text-white' />
//                     <p className='text-base text-white font-semibold'>
//                         Roadmap
//                     </p>
//                 </Link>
//             </div>
//             <div className="mt-4">
//                 <Link
//                     href="/profiles"
//                     className="flex justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
//                 >
//                     <PersonOutlineOutlinedIcon className='text-2xl text-gray-200 group-hover:text-white' />
//                     <p className='text-base text-white font-semibold'>
//                         Profiles
//                     </p>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default LeftBarNavigation;

// 'use client'
// import React from 'react';
// import { useSession } from "next-auth/react";

// const LeftBarNavigation = () => {
//     const session = useSession()
//     return (
//         <div>
//         </div>
//     );
// };

// export default LeftBarNavigation;