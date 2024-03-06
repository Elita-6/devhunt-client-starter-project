import {httpClient} from "@/lib/axios";
import {IExampleDto} from "@/app/feat-exemple/_services/definition";
import { DISCUSSION_ENDPOINTS } from "./endpoint";


class BolidaService{
    public createMessage(messageToCreate: string){
        return httpClient.post(DISCUSSION_ENDPOINTS.CREATE,messageToCreate)
    }
    public getExampleByExampleId(exampleId: string){
        return httpClient.get(DISCUSSION_ENDPOINTS.GET_ALL.replace("id",exampleId))
    }

    public getAllMessage(){
        return httpClient.get(DISCUSSION_ENDPOINTS.GET_ALL)
    }
    public updateExample(exampleToUpdate: IExampleDto,id:string){
        return httpClient.put(DISCUSSION_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(DISCUSSION_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const bolidaService = new BolidaService()