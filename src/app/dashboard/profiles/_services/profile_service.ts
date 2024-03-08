import {httpClient} from "@/lib/axios";
import {PROFILE_ENDPOINTS} from '@/app/dashboard/profiles/_services/endpoint'
import {ProfileDTO} from "@/app/dashboard/profiles/_services/definition";



class ProfileService{
    public createProfile(profileCreate: ProfileDTO){
        return httpClient.post(PROFILE_ENDPOINTS.CREATE,profileCreate)
    }
    public getProfileById(profileId: string){
        return httpClient.get(PROFILE_ENDPOINTS.GET.replace("userid",profileId))
    }
    public updateProfile(profileUpdate: ProfileDTO,id:string){
        return httpClient.put(PROFILE_ENDPOINTS.UPDATE.replace("userid",id),profileUpdate)
    }
    public deleteProfile(id: string){
        return httpClient.get(PROFILE_ENDPOINTS.DELETE.replace("userid",id))
    }
}
export const profileService = new ProfileService()
