import { useMutation, useQuery, useQueryClient } from "react-query";
import { profileService } from "@/app/dashboard/profiles/_services/profile_service";
import { techService } from "@/app/dashboard/profiles/_services/tech_service";
import { userService } from "@/app/dashboard/profiles/_services/user_service";


// tech
export const useFetchAllTech = (q: string) => {
    return useQuery({
        queryKey: ['tech', q],
        queryFn: () => techService.getAllTechByName(q)
    })
}

//user
export const useFetchAllUser = (level?: string, parcours?: string) => {
    return useQuery({
        queryKey: ['users', level, parcours],
        queryFn: () => userService.getAllUser()
    })
}
// profile
export const useFetchUserProfile =(userid: string)=>{
    return useQuery({
        queryKey:['user_profile',userid],
        queryFn:()=> profileService.getUserProfileById(userid)
    })
}

export const useFetchUserSkills =(profileId: string)=>{
    return useQuery({
        queryKey:['user_skills',profileId],
        queryFn:()=> profileService.getUserProfileById(profileId)
    })
}

export const useUpdateUserSkills = (profileId: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        /*mutationFn: (example: IExampleDto ) => {},*/
        onSuccess: async () => {
            await queryClient.invalidateQueries(['user_skills', profileId])
           // await queryClient.resetQueries(['example'])
        }
    })
}


export const useFetchUserSkill = (userid: string) => {
    return useQuery({
        queryKey: ['user_skills', userid],
        //queryFn:()=> profileService.getAllSkillsByName(name)
    })
}
export const useUpdateExample = (updateId: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        /*mutationFn: (example: IExampleDto ) => {},*/
        onSuccess: async () => {
            await queryClient.invalidateQueries(['example'])
            await queryClient.resetQueries(['example'])
        }
    })
}

export const useDeleteExample = () => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            /*mutationFn:(exampleId:string)=> {},*/
            onSuccess: async () => {
                await queryClient.invalidateQueries(['example'])
                await queryClient.resetQueries(['example'])
            }
        }
    )
}
