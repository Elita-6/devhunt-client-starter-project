import {httpClient} from "@/lib/axios";
import {EXPERIENCE_ENDPOINTS} from "@/app/dashboard/profiles/_services/endpoint";

interface CreateProjectDTO {

}

interface UpdateProjectDTO {

}
class ProjectService{
    public createExperience(experienceCreate:CreateProjectDTO ){
        return httpClient.post(EXPERIENCE_ENDPOINTS.CREATE,experienceCreate)
    }
    public getExperienceById(experienceId: string){
        return httpClient.get(EXPERIENCE_ENDPOINTS.GET.replace("id",experienceId))
    }

    public getAllExperience(profileId: string){
        return httpClient.get(EXPERIENCE_ENDPOINTS.GET_ALL.replace('userid',profileId))
    }
    public updateExperience(experienceUpdate: UpdateProjectDTO,id:string){
        return httpClient.put(EXPERIENCE_ENDPOINTS.UPDATE.replace("id",id),experienceUpdate)
    }
    public deleteExperience(userId: string,expId: string){
        return httpClient.get(EXPERIENCE_ENDPOINTS.DELETE.replace("id",expId))
    }
}
export const userService = new ProjectService()
