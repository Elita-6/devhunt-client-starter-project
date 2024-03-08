
import {httpClient} from "@/lib/axios";
import {TECH_ENDPOINTS} from "@/app/dashboard/profiles/_services/endpoint";


class TechService{
    public getAllTechByName(query: string){
        return httpClient.get(TECH_ENDPOINTS.GET_ALL.replace('query', query))
    }

}
export const techService = new TechService()
