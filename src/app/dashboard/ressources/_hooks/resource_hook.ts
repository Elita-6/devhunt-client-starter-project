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
            mutationFn: (resourceToCreate:IResourceDto)=> resourceService.createResource(resourceToCreate),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['resource'])
                await queryClient.invalidateQueries(['resource'])
            }
        }
    )
}
export const useFetchExampleById = (exampleId:string) =>{
    return useQuery({
        queryKey:['example'],
        queryFn:()=> exampleService.getExampleByExampleId(exampleId)
    })
}

export const useFetchAllExample =()=>{
    return useQuery({
        queryKey:['example'],
        queryFn:()=> exampleService.getAllExample()
    })
}
export const useUpdateExample=(updateId:string)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (example: IExampleDto ) => exampleService.updateExample(example,updateId),
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
            mutationKey:['delete'],
            mutationFn:(exampleId:string)=> exampleService.deleteExampleByExampleId(exampleId),
            onSuccess: async () =>{
                await queryClient.invalidateQueries(['example'])
                await queryClient.resetQueries(['example'])
            }
        }
    )
}