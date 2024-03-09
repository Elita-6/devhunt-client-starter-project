import {useMutation, useQuery, useQueryClient} from "react-query";
import {IExampleDto} from "@/app/feat-exemple/_services/definition";
import {exampleService} from "@/app/feat-exemple/_services/exemple_service";
import {resourceService} from "@/app/dashboard/ressources/_services/resource_service";
import {IResourceDto} from "@/app/dashboard/ressources/_services/definition";

export  const useCreateResource= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['resource','create'],
            mutationFn: (resourceToCreate:FormData)=> resourceService.createResource(resourceToCreate),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['resource'])
                await queryClient.invalidateQueries(['resource'])
            }
        }
    )
}

export const useFetchResource =()=>{
    return useQuery({
        queryKey:['resource'],
        queryFn:()=> resourceService.getAllResource()
    })
}

