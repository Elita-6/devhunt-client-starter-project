import {httpClient} from "@/lib/axios";
import {EXPERIENCE_ENDPOINTS} from "@/app/dashboard/profiles/_services/endpoint";

interface CreateExperienceDTO {

}

interface UpdateExperienceDTO {

}
class ExperienceService{
    public createExperience(experienceCreate:CreateExperienceDTO ){
        return httpClient.post(EXPERIENCE_ENDPOINTS.CREATE,experienceCreate)
    }
    public getExperienceById(experinceId: string){
        return httpClient.get(EXPERIENCE_ENDPOINTS.GET.replace("id",experinceId))
    }

    public getAllExperience(userid: string){
        return httpClient.get(EXPERIENCE_ENDPOINTS.GET_ALL.replace('userid',userid))
    }
    public updateExperience(experienceUpdate: UpdateExperienceDTO,id:string){
        return httpClient.put(EXPERIENCE_ENDPOINTS.UPDATE.replace("id",id),experienceUpdate)
    }
    public deleteExperience(userId: string,expId: string){
        return httpClient.get(EXPERIENCE_ENDPOINTS.DELETE.replace("id",expId))
    }
}
export const userService = new ExperienceService()
