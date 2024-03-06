import {useMutation, useQuery, useQueryClient} from "react-query";
import {IExampleDto} from "@/app/feat-exemple/_services/definition";
import {exampleService} from "@/app/feat-exemple/_services/exemple_service";
import {bolidaService} from "@/app/dashboard/(bolida)/_services/bolida-ia-service";

export  const useCreateMessage= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['create','message'],
            mutationFn: (messageToCreate:string)=> bolidaService.createMessage(messageToCreate),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['messages'])
                await queryClient.invalidateQueries(['messages'])
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
        queryKey:['messages'],
        queryFn:()=> bolidaService.getAllMessage()
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