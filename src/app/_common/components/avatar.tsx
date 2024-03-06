import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import { getInitialsFromName } from '../utils';

interface IAvatar {
    image_url: string,
    username?: string,
    style?: string
}
export const CustomAvatar = (props: IAvatar) =>{
    const {image_url, username, style} = props;
    const initials = username ? getInitialsFromName(username): 'A'
    return(
        <Avatar className={style} >
            <AvatarImage src={image_url} alt="user profile" />
            <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
    )
}
