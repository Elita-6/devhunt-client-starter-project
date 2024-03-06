import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {cookies} from "next/headers";



class HttpClient {

    private  client(): AxiosInstance  {
        const axiosConfig: AxiosRequestConfig = {
            baseURL: "https://devhunt-starter-api-production.up.railway.app/api"

        }
        let axiosInstance = axios.create(axiosConfig)
        axiosInstance.interceptors.request.use((config) => {
            const cookieStore = cookies()
            const accessToken = cookieStore.get('token')
                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken?.value}`;
                }
                return config
            }, (error) => {
                return Promise.reject(error)
            }
        )
        return axiosInstance
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