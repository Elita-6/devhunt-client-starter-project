import {httpClient} from "@/lib/axios";
import {POST_ENDPOINTS, TAG_ENDPOINTS} from "@/app/dashboard/discussions/_services/endpoint";
import {ICommentDto, IPostDto, IReaction} from "@/app/dashboard/discussions/_services/definition";

class PostService{
    public createPost(post: IPostDto){
        return httpClient.post(POST_ENDPOINTS.CREATE,post)
    }
    public createCommentForPost(comment:ICommentDto){
        return httpClient.post(POST_ENDPOINTS.COMMENT_POST,comment)
    }
    public getExampleByExampleId(postId: string){
        return httpClient.get(POST_ENDPOINTS.GET.replace("id",postId))
    }

    public getAllPost(){
        return httpClient.get(POST_ENDPOINTS.GET_ALL)
    }
    public getAllTags(query:string){
        return httpClient.get(TAG_ENDPOINTS.GET_ALL.replace("design",query))
    }
    public getPopularTags(){
        return httpClient.get(TAG_ENDPOINTS.GET_TAG_POPULAR)
    }
    public updateExample(exampleToUpdate: IPostDto,id:string){
        return httpClient.put(POST_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(POST_ENDPOINTS.DELETE.replace("id",exampleId))
    }
    public reactPost(reaction:IReaction){
        return httpClient.put(POST_ENDPOINTS.REACTION,reaction)
    }
    public  getReactionForPost(postId:string){
        return httpClient.get(POST_ENDPOINTS.GET_REACTION_BY_POST_ID.replace("id",postId))
    }
    public  getCommentForPost(postId:string){
        return httpClient.get(POST_ENDPOINTS.GET_COMMENT_BY_POST_ID.replace("id",postId))
    }
}
export const postService = new PostService()