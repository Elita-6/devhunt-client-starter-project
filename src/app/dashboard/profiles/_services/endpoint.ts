export enum USER_ENDPOINTS{
    CREATE = "/user",
    GET_ALL="/user?page=number_page?size=size_number?",
    GET="/user",
    UPDATE="/user/:id",
    DELETE="/user/:id",

}

export enum PROFILE_ENDPOINTS {
    GET= "/user-profile/userid",
    CREATE= "/user-profile/userid",
    UPDATE= "/user-profile/userid",
    DELETE= "/user-profile/userid"
}

export enum TECHNO_ENDPOINTS {
    GET_ALL= '/technology?q=query'
}
export enum SKILLS_ENDPOINT {
    GET_USER_SKILLS=  "/skills/userid",
}

export  enum EXPERIENCE_ENDPOINT {
    GET= "/experience/userid?page=number_page?size=size_number",
    CREATE= "/experience",
    UPDATE= "/experience/userid",
    DELETE= "/experience/userid"
}
export  enum PROJECT_ENDPOINT {
    GET= "/project/userid?page=number_page?size=size_number",
    CREATE= "/project",
    UPDATE= "/project/userid",
    DELETE= "/project/userid"
}
