import axios , {AxiosInstance , AxiosResponse} from "axios";



class HttpClient {

    private  client(): AxiosInstance  {
        return axios.create({
            baseURL: "https://devhunt-starter-api-production.up.railway.app/api"
        })
    }

    public get(url: string) {
        return this.client().get(url)
    }
    public  post<T>(url: string, payload: T) : Promise<AxiosResponse>{
        return this.client().post(url, payload);
    }
    public put<T>(url: string, payload: T) : Promise<AxiosResponse>{
        return this.client().put(url, payload);
    }
    public  patch<T>(url: string, payload: T): Promise<AxiosResponse> {
        return this.client().patch(url, payload);
    }
    public delete(url: string): Promise<AxiosResponse> {
        return this.client().delete(url);
    }
}

export const httpClient = new HttpClient();