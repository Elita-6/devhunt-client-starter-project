"use client"
import {CustomAvatar} from "@/app/_common/components/avatar";
import {SkillsContainer} from "@/app/dashboard/profiles/_components/skills_wrapper";
import {Diamond , Github  , LinkedinIcon , LinkIcon} from "lucide-react";
import {EditProfile} from "@/app/dashboard/profiles/_components/edit_profile";
import {Box} from "@/app/dashboard/profiles/_components/box";
import {SocialLInk} from "@/app/dashboard/profiles/_components/SocialLInk";
import {ProjectWrapper} from "@/app/dashboard/profiles/_components/project/project_wrapper";
import ExperienceWrapper from "@/app/dashboard/profiles/_components/project/experience_wrapper";
import {useFetchUserProfile} from "@/app/dashboard/profiles/_hooks/profile_hook";
import {ProfileSkeleton} from "@/app/dashboard/profiles/_components/skelleton/profiles.skeleton";
import {ProfileDetailsSkeleton} from "@/app/dashboard/profiles/_components/skelleton/profile_details_skeleton";
import {users} from "@/app/_common/constants/data";


interface IUser {
    active: boolean,
    contact:string,
    created_at: string,
    email: string
    firstName: string
    lastName: string
    profileUrl: string
    typeProvider: string
    updated_at: string
    userId: string
    userName?: string
}
interface UserProfile {
    profileId: string;
    description: string;
    linkGithub?: string;
    linkLinkedin?: string;
    linkPortfolio?: string;
    level?: string
    isProf: boolean;
    user: IUser
    parcour?: string;
}
export default function ProfileDetailPage({params}: {params: {id: string}}) {
    const user_id = params.id;
    const {data: profile, isLoading, isError, isSuccess} = useFetchUserProfile(user_id);
    let user: IUser = {} as IUser ;
    let socialLinks = [];
    let profileId;
    if(profile?.data && isSuccess){
        profileId = profile.data.profileId
        user = profile.data.user
        console.log(profile.data)
        user.userName = profile.data.user.userName !== null ? profile.data.user.userName : profile.data.user.firstName

        if(profile.data.linkGithub){
            socialLinks.push({icon: <Github />, url: profile.data.linkGithub, name: "Github"})
        }
        if(profile.data.linkLinkedin){
            socialLinks.push({icon: <LinkedinIcon />, url: profile.data.linkLinkedin, name:"LinkedIn"})
        }
        if(profile.data.linkPortfolio){
            socialLinks.push({icon: <LinkIcon />, url: profile.data.linkPortfolio, name: "Website"})
        }
    }

    if(isLoading){
        return <ProfileDetailsSkeleton />
    }
    if(isError) {
        return <ProfileDetailsSkeleton />
    }
    return(
        <div className="w-full h-full px-24">
                <div className="bg-gradient-to-br from-[#761ABE] to-[#4E246E] h-[12rem] relative rounded-lg">
                <div className="w-[10rem] h-[16rem] rounded-3xl bg-[#E8F4FC] opacity-10 -rotate-45 absolute -right-16 -top-14 "/>
                <div className="absolute -bottom-12 md:px-[5%] lg:px-[10%] ">
                    <div className="flex items-center gap-5">
                        <CustomAvatar image_url={user.profileUrl} username="Riry Nomena" style="h-32 w-32 border border-4" />
                        <div className="flex flex-col justify-between ite ">
                            <span className="text-3xl text-white font-semibold mt-4 mb-8">{user.userName}</span>
                            <div className=" flex  items-center gap-5">
                                <Box
                                    icon={<Diamond />}
                                    label={`${profile?.data.level !=null ? profile.data.level : "L3 IG"} ${profile?.data.parcour}`}
                                />
                                {
                                    socialLinks.map(social => (
                                        <SocialLInk icon={social.icon} name={social.name} url={social.url} key={social.name} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end p-4 z-10">
                <EditProfile profileId={profileId} />
            </div>
            <SkillsContainer profileId={profileId} />

            <div className="flex flex-col gap-7 w-full">
                <ExperienceWrapper profileId={profileId} />
                <ProjectWrapper profileId={profileId}  />
                *
            </div>


        </div>
    )
}
