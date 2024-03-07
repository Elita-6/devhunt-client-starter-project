
"use client"
import {CustomAvatar} from "@/app/_common/components/avatar";
import {SkillsContainer} from "@/app/dashboard/profiles/_components/skills_wrapper";
import {Button} from "@mui/base";
import {Diamond , Github , LinkIcon , Pencil} from "lucide-react";
import {EditProfile} from "@/app/dashboard/profiles/_components/edit_profile";
import {Box} from "@/app/dashboard/profiles/_components/box";
import {SocialLInk} from "@/app/dashboard/profiles/_components/SocialLInk";
import {useFetchAllTech} from "@/app/dashboard/profiles/_hooks/profile_hook";
import {ProjectWrapper} from "@/app/dashboard/profiles/_components/project/project_wrapper";
import ExperienceWrapper from "@/app/dashboard/profiles/_components/project/experience_wrapper";
import {users} from "@/app/_common/constants/data";



export default function ProfileDetailPage({params}: {params: {id: string}}) {
    const user_id = params.id;
    const user = users.filter(user => user.id == user_id)[0];
    return(
        <div className="w-full h-full px-24">
            <div className="bg-gradient-to-br from-[#761ABE] to-[#4E246E] h-[12rem] relative rounded-lg">
                <div className="w-[10rem] h-[16rem] rounded-3xl bg-[#E8F4FC] opacity-10 -rotate-45 absolute -right-16 -top-14 "/>
                <div className="absolute -bottom-12 md:px-[5%] lg:px-[10%] ">
                    <div className="flex items-center gap-5">
                        <CustomAvatar image_url={user.profile_url} username="Riry Nomena" style="h-32 w-32 border border-4" />
                        <div className="flex flex-col justify-between ite ">
                            <span className="text-3xl text-white font-semibold mt-4 mb-8">{user.username}</span>
                            <div className=" flex  items-center gap-5">
                                <Box
                                    icon={<Diamond />}
                                    label={`${user.level} ${user.parcours.parcours_name}`}
                                />
                                <SocialLInk icon={<Github />} name="Github" url={user.github_url} />
                                <SocialLInk icon={<LinkIcon />} name="Website" url={user.website_url} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end p-4 z-10">
                {/*Edit button*/}
                 <EditProfile />
            </div>
            <SkillsContainer skills={user.skills} />
            <div className="flex flex-col gap-7 w-full">
                <ExperienceWrapper user_id={user_id} />
                <ProjectWrapper user_id={user_id}  />
            </div>



        </div>
    )
}
