import {CustomAvatar} from "@/app/_common/components/avatar";
import {Edit , Pencil} from "lucide-react";
import {Button} from "@/components/ui/button";
import {SkillsBox} from "@/app/dashboard/profiles/_components/skills_box";
import {SkillsEdit} from "@/app/dashboard/profiles/_components/skills_edit";

export default function ProfileDetailPage({params}: {params: {id: string}}) {
    const user_id = params.id;

    return(
        <div className="w-full h-full px-24">
            <div className="bg-gradient-to-br from-[#761ABE] to-[#4E246E] h-[12rem] relative rounded-lg">
                <div className="w-[10rem] h-[16rem] rounded-3xl bg-[#E8F4FC] opacity-10 -rotate-45 absolute -right-16 -top-14 "/>
                <div className="absolute -bottom-12 md:px-[5%] lg:px-[10%] ">
                    <div className="flex items-center gap-5">
                        <CustomAvatar image_url={""} username="Riry Nomena" style="h-32 w-32 border border-4" />
                        <div className="flex flex-col justify-between ">
                            <span className="text-3xl text-white font-semibold mt-4 mb-8"> Riry Nomenjanahary</span>
                            <div className=" flex justify-between items-center gap-5">
                                <span>
                                    L3 IG
                                </span>
                                <span>
                                    WEBSITE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end p-4 z-10">
                {/*Edit button*/}
                <Button className="flex gap-2 bg-blue-700">
                    <Pencil />
                    Edit profile
                </Button>
            </div>


        </div>
    )
}
