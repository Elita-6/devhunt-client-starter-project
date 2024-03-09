export enum USER_ENDPOINTS{
    CREATE = "/user",
    GET_ALL="/user?page=number_page?size=size_number?",
    GET="/user",
    UPDATE="/user/:id",
    DELETE="/user/:id",

}

export enum PROFILE_ENDPOINTS {
    GET= "/userprofile/userid",
    CREATE= "/userprofile/userid",
    UPDATE= "/userprofile/userid",
    DELETE= "/userprofile/userid"
}

export enum TECH_ENDPOINTS {
    GET_ALL= '/techno/search/query'
}
export enum SKILLS_ENDPOINT {
    GET_USER_SKILLS=  "/technology/profileId",
    UPDATE_USER_SKILLS= "/profiletech/profileId"
}

export  enum EXPERIENCE_ENDPOINTS {
    GET= "/experience/profileId",
    GET_ALL= "/experience/profileId?page=number_page?size=size_number",
    CREATE= "/experience/profileId",
    UPDATE= "/experience/profileId/experienceId",
    DELETE= "/experience/profileId/experienceId"
}
export  enum PROJECT_ENDPOINT {
    GET= "/project/userid?page=number_page?size=size_number",
    CREATE= "/project",
    UPDATE= "/project/userid",
    DELETE= "/project/userid"
}
