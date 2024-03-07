import {useMutation, useQuery, useQueryClient} from "react-query";
import {IPostDto, IReaction} from "@/app/dashboard/discussions/_services/definition";
import {postService} from "@/app/dashboard/discussions/_services/post_service";

export  const useCreatePost= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['create','post'],
            mutationFn: (post:IPostDto)=> postService.createPost(post),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['example'])
                await queryClient.invalidateQueries(['example'])
            }
        }
    )
}
export const useFetchPostById = (exampleId:string) =>{
    return useQuery({
        queryKey:['example'],
        queryFn:()=> postService.getExampleByExampleId(exampleId)
    })
}

export const useFetchAllPost =()=>{
    return useQuery({
        queryKey:['posts'],
        queryFn:()=> postService.getAllPost()
    })
}

export const useFetchAllTag =(query:string)=>{
    return useQuery({
        queryKey:['tags'],
        queryFn:()=> postService.getAllTags(query)
    })
}
export const useFetchReaction =(postId:string)=>{
    return useQuery({
        queryKey:['tags'],
        queryFn:()=> postService.getReactionForPost(postId)
    })
}


export const useFetchComment =(postId:string)=>{
    return useQuery({
        queryKey:['tags'],
        queryFn:()=> postService.getCommentForPost(postId)
    })
}

export const useUpdateExample=(updateId:string)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (post: IPostDto ) => postService.updateExample(post,updateId),
        onSuccess:async ()=>{
            await queryClient.invalidateQueries(['example'])
            await queryClient.resetQueries(['example'])
        }
    })
}
export const useReactionUpdate=()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (reaction:IReaction  ) => postService.reactPost(reaction),
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
            mutationFn:(exampleId:string)=> postService.deleteExampleByExampleId(exampleId),
            onSuccess: async () =>{
                await queryClient.invalidateQueries(['example'])
                await queryClient.resetQueries(['example'])
            }
        }
    )
}