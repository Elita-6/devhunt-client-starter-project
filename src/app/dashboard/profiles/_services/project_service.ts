import {httpClient} from "@/lib/axios";
import {EXPERIENCE_ENDPOINTS , PROJECT_ENDPOINT} from "@/app/dashboard/profiles/_services/endpoint";

export interface CreateProjectDTO {
    title: string,
    projectDescription: string,
    imageUrl?: string,
    startDate: string,
    endDate: string
}
export interface IProject extends CreateProjectDTO{
    projectId: string
}
interface UpdateProjectDTO {

}
class ProjectService{
    public createProject(projectCreate:CreateProjectDTO ){
        return httpClient.post(PROJECT_ENDPOINT.CREATE,projectCreate)
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
export const projectService = new ProjectService()
