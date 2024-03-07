
"use client"
import {CustomAvatar} from "@/app/_common/components/avatar";
import {SkillsContainer} from "@/app/dashboard/profiles/_components/skills_wrapper";
import {Button} from "@mui/base";
import {Diamond , Github , Pencil} from "lucide-react";
import {EditProfile} from "@/app/dashboard/profiles/_components/edit_profile";
import {Box} from "@/app/dashboard/profiles/_components/box";
import {SocialLInk} from "@/app/dashboard/profiles/_components/SocialLInk";
import {useFetchAllTech} from "@/app/dashboard/profiles/_hooks/profile_hook";
import {ProjectWrapper} from "@/app/dashboard/profiles/_components/project/project_wrapper";



export default function ProfileDetailPage({params}: {params: {id: string}}) {
    const  skills = [
        {
            skill_id: "reactjs",
            skill_name: "reactjs"
        },
        {
            skill_id: "reactjs",
            skill_name: "reactjs"
        },
        {
            skill_id: "reactjs",
            skill_name: "reactjs"
        }
    ]

    const user_id = params.id;
    const {data} = useFetchAllTech();
    console.log(data)
    return(
        <div className="w-full h-full px-24">
            <div className="bg-gradient-to-br from-[#761ABE] to-[#4E246E] h-[12rem] relative rounded-lg">
                <div className="w-[10rem] h-[16rem] rounded-3xl bg-[#E8F4FC] opacity-10 -rotate-45 absolute -right-16 -top-14 "/>
                <div className="absolute -bottom-12 md:px-[5%] lg:px-[10%] ">
                    <div className="flex items-center gap-5">
                        <CustomAvatar image_url={""} username="Riry Nomena" style="h-32 w-32 border border-4" />
                        <div className="flex flex-col justify-between ite ">
                            <span className="text-3xl text-white font-semibold mt-4 mb-8"> Riry Nomenjanahary</span>
                            <div className=" flex  items-center gap-5">
                                <Box
                                    icon={<Diamond />}
                                    label="L3 IG"
                                />
                                <SocialLInk icon={<Github />} name="Github" url="https://github.com" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end p-4 z-10">
                {/*Edit button*/}
                 <EditProfile />
            </div>
            <SkillsContainer skills={skills} />
            <ProjectWrapper  />

        </div>
    )
}
