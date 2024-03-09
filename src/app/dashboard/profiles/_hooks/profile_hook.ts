import { useMutation, useQuery, useQueryClient } from "react-query";
import { profileService } from "@/app/dashboard/profiles/_services/profile_service";
import { techService } from "@/app/dashboard/profiles/_services/tech_service";
import { userService } from "@/app/dashboard/profiles/_services/user_service";
import {IUpdateUserSkillsDTo , ProfileDTO} from "@/app/dashboard/profiles/_services/definition";
import {CreateExperienceDTO , experienceService} from "@/app/dashboard/profiles/_services/experience_service";
import {CreateProjectDTO , projectService} from "@/app/dashboard/profiles/_services/project_service";


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
        queryKey:['user_profile'],
        queryFn:()=> profileService.getUserProfileById(userid)
    })
}

export const useFetchUserSkills =(profileId: string)=>{
    return useQuery({
        queryKey:['user_skills',profileId],
        queryFn:()=> profileService.getUserSkills(profileId)
    })
}

export const useUpdateUserSkills = (profileId: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ( updateData: IUpdateUserSkillsDTo) => profileService.updateUserSkills(profileId, updateData.added, updateData.removed),
        onSuccess: async () => {
            await queryClient.invalidateQueries(['user_skills', profileId])
            await queryClient.resetQueries(['user_skills', profileId])
        }
    })
}

export  const useFetchAllParcours = () =>  {
    return useQuery({
        queryKey:['parcours'],
        queryFn:()=> profileService.getALLParcours()
    })
}

//experience
export const useFetchUserExperience =(profileId: string)=>{
    return useQuery({
        queryKey:['experience',profileId],
        queryFn:()=> experienceService.getAllExperience(profileId)
    })
}

export const useFetchUserSkill = (userid: string) => {
    return useQuery({
        queryKey: ['user_skills', userid],
        //queryFn:()=> profileService.getAllSkillsByName(name)
    })
}

export const useUpdateProfile = (profileId: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (profileDTO: ProfileDTO ) => profileService.updateProfile(profileDTO, profileId),
        onSuccess: async () => {
            await queryClient.invalidateQueries(['user_profile'])
        }
    })
}
export const useCreateExperience = (profileId: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (experienceDTO: CreateExperienceDTO ) => experienceService.createExperience(experienceDTO),
        onSuccess: async () => {
            await queryClient.invalidateQueries(['experience', profileId])
        }
    })
}


export const useCreateProject = (profileId: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (projectDTO: CreateProjectDTO ) => projectService.createProject(projectDTO),
        onSuccess: async () => {
            await queryClient.invalidateQueries(['project', profileId])
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
