import {httpClient} from "@/lib/axios";
import {PROFILE_ENDPOINTS , SKILLS_ENDPOINT} from '@/app/dashboard/profiles/_services/endpoint'
import {ProfileDTO} from "@/app/dashboard/profiles/_services/definition";



class ProfileService{
    public createProfile(profileCreate: ProfileDTO){
        return httpClient.post(PROFILE_ENDPOINTS.CREATE,profileCreate)
    }
    public getUserProfileById(userId: string){
        return httpClient.get(PROFILE_ENDPOINTS.GET.replace("userid",userId))
    }
    public getUserSkills(profileId: string){
        return httpClient.get(SKILLS_ENDPOINT.GET_USER_SKILLS.replace("profileId",profileId))
    }

    public updateUserSkills(profileId: string, added: string[], removed: string[] ) {
        return httpClient.post(SKILLS_ENDPOINT.UPDATE_USER_SKILLS.replace("profileId", profileId),{added, removed})
    }
    public updateProfile(profileUpdate: ProfileDTO,profileId:string){
        return httpClient.put(PROFILE_ENDPOINTS.UPDATE.replace("profileId",profileId),profileUpdate)
    }
    public deleteProfile(id: string){
        return httpClient.get(PROFILE_ENDPOINTS.DELETE.replace("userid",id))
    }

    public getALLParcours(){
        return httpClient.get(PROFILE_ENDPOINTS.GET_PARCOURS)
    }


}
export const profileService = new ProfileService()
