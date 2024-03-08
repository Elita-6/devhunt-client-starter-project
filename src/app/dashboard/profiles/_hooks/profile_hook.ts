import {useMutation, useQuery, useQueryClient} from "react-query";
import {IExampleDto} from "@/app/feat-exemple/_services/definition";
import {profileService} from "@/app/dashboard/profiles/_services/profile_service";


export  const useCreateExample= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['example'],
            mutationFn: (exampleToCreate:IExampleDto)=> profileService.createProfile(exampleToCreate),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['example'])
                await queryClient.invalidateQueries(['example'])
            }
        }
    )
}
export const useFetchAllTech = () =>{
    return useQuery({
        queryKey:['tech'],
        queryFn:()=> profileService.getAllTechnology()
    })
}

export const useFetchAllSkill =(name: string)=>{
    return useQuery({
        queryKey:['skills'],
        queryFn:()=> profileService.getAllSkillsByName(name)
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
