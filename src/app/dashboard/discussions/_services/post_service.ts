import {httpClient} from "@/lib/axios";
import {POST_ENDPOINTS, TAG_ENDPOINTS} from "@/app/dashboard/discussions/_services/endpoint";
import {IPostDto} from "@/app/dashboard/discussions/_services/definition";

class PostService{
    public createPost(post: IPostDto){
        return httpClient.post(POST_ENDPOINTS.CREATE,post)
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
    public updateExample(exampleToUpdate: IPostDto,id:string){
        return httpClient.put(POST_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(POST_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const postService = new PostService()