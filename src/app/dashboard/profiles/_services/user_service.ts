
import { httpClient } from "@/lib/axios";
import { USER_ENDPOINTS } from "@/app/dashboard/profiles/_services/endpoint";

interface CreateUserDTO {

}

interface UpdateUserDTO {
    username?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    profileUrl: string
}

class UserService {
    public createUser(userCreate: CreateUserDTO) {
        return httpClient.post(USER_ENDPOINTS.CREATE, userCreate).then(

        )
    }
    public getUserById(userId: string) {
        return httpClient.get(USER_ENDPOINTS.GET.replace("id", userId))
    }

    public getAllUser() {
        return httpClient.get(USER_ENDPOINTS.GET_ALL)
    }
    public updateUser(userUpdate: UpdateUserDTO, id: string) {
        return httpClient.put(USER_ENDPOINTS.UPDATE.replace("id", id), userUpdate)
    }
    public deleteUserById(userId: string) {
        return httpClient.get(USER_ENDPOINTS.DELETE.replace("id", userId))
    }
}
export const userService = new UserService()
