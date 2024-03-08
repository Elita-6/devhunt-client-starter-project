import {useMutation, useQuery, useQueryClient} from "react-query";
import {profileService} from "@/app/dashboard/profiles/_services/profile_service";
import {techService} from "@/app/dashboard/profiles/_services/tech_service";
import {userService} from "@/app/dashboard/profiles/_services/user_service";


// tech
export const useFetchAllTech = (q: string) =>{
    return useQuery({
        queryKey:['tech', q],
        queryFn:()=> techService.getAllTechByName(q)
    })
}

//user
export const useFetchAllUser = (level?: string,parcours?: string ) =>{
    return useQuery({
        queryKey:['users',level,parcours ],
        queryFn:()=> userService.getAllUser()
    })
}

export const useFetchUserSkill =(userid: string)=>{
    return useQuery({
        queryKey:['user_skills',userid],
        //queryFn:()=> profileService.getAllSkillsByName(name)
    })
}
export const useUpdateExample=(updateId:string)=>{
    const queryClient = useQueryClient()
    return useMutation({
        /*mutationFn: (example: IExampleDto ) => {},*/
        onSuccess:async ()=>{
            await queryClient.invalidateQueries(['example'])
            await queryClient.resetQueries(['example'])
        }
    })
}

export const useDeleteExample = () =>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            /*mutationFn:(exampleId:string)=> {},*/
            onSuccess: async () =>{
                await queryClient.invalidateQueries(['example'])
                await queryClient.resetQueries(['example'])
            }
        }
    )
}
