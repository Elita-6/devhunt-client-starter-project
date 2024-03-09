import {httpClient} from "@/lib/axios";
import {IExampleDto} from "@/app/feat-exemple/_services/definition";
import {IResourceDto} from "@/app/dashboard/ressources/_services/definition";
import {RESOURCE_ENDPOINTS} from "@/app/dashboard/ressources/_services/endpoint";


class ResourceService{
    public createResource(resourceToCreate: IResourceDto){
        const formData = new FormData();
        formData.append('tags', JSON.stringify(resourceToCreate.tags));
        formData.append('resourceName', resourceToCreate.resourceName);
        formData.append('file', resourceToCreate.file);

        return httpClient.post(RESOURCE_ENDPOINTS.CREATE,formData)
    }
    public getExampleByExampleId(exampleId: string){
        return httpClient.get(RESOURCE_ENDPOINTS.GET.replace("id",exampleId))
    }

    public getAllResource(){
        return httpClient.get(RESOURCE_ENDPOINTS.GET_ALL)
    }
    public updateExample(exampleToUpdate: IExampleDto,id:string){
        return httpClient.put(RESOURCE_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(RESOURCE_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const resourceService = new ResourceService()