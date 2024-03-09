export interface IExampleDto{
    message: string
}

export interface ProfileDTO {
    description?: string,
    parcourId?: string,
    portID?: string,
    linkGithub?: string,
    linkPortfolio?: string,
    linkLinkedin?: string,
    level?: string,
}

export interface IUpdateUserSkillsDTo {
    added: string[],
    removed: string[]
}
