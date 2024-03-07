import {httpClient} from "@/lib/axios";
import {IExampleDto} from "@/app/feat-exemple/_services/definition";
import {PROFILE_ENDPOINTS} from "@/app/dashboard/profiles/_services/endpoint";


class ProfileService{
    public createProfile(exampleToCreate: IExampleDto){
        return httpClient.post(PROFILE_ENDPOINTS.CREATE,exampleToCreate)
    }

    public getUsers(){
        return httpClient.get(PROFILE_ENDPOINTS.GET)
    }
    public getProfileId(exampleId: string){

        return httpClient.get(PROFILE_ENDPOINTS.GET_USER_PROFILE.replace("id",exampleId))
    }

    public getAllSkillsByName(name: string){
        return httpClient.get(PROFILE_ENDPOINTS.GET_ALL_TECH.replace('query',name));
    }
    public updateProfile(exampleToUpdate: IExampleDto,id:string){
        return httpClient.put(PROFILE_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(PROFILE_ENDPOINTS.DELETE.replace("id",exampleId))
    }

    public getAllTechnology() {
        return httpClient.get(PROFILE_ENDPOINTS.GET_ALL_TECH)
    }
}
export const profileService = new ProfileService()
