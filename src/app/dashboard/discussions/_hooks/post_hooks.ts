import {useMutation, useQuery, useQueryClient} from "react-query";
import {ICommentDto, IPostDto, IReaction} from "@/app/dashboard/discussions/_services/definition";
import {postService} from "@/app/dashboard/discussions/_services/post_service";

export  const useCreatePost= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['create','post'],
            mutationFn: (post:IPostDto)=> postService.createPost(post),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['posts'])
                await queryClient.invalidateQueries(['posts'])
            }
        }
    )
}

export  const useCreateComment= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['create','comment'],
            mutationFn: (comment:ICommentDto)=> postService.createCommentForPost(comment),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['comments'])
                await queryClient.invalidateQueries(['comments'])
            }
        }
    )
}

export const useFetchPostById = (exampleId:string) =>{
    return useQuery({
        queryKey:['post'],
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
        queryKey:['tags',query],
        queryFn:()=> postService.getAllTags(query)
    })
}
export const useFetchReaction =(postId:string)=>{
    return useQuery({
        queryKey:['reaction'],
        queryFn:()=> postService.getReactionForPost(postId)
    })
}


export const useFetchComment =(postId:string)=>{
    return useQuery({
        queryKey:['comments'],
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