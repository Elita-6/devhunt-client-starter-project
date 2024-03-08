import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import { getInitialsFromName } from '../utils';
import Link from "next/link";

interface IAvatar {
    image_url: string,
    username?: string,
    style?: string,
    userId?: string
}
export const CustomAvatar = (props: IAvatar) =>{
    const {image_url, username, style, userId} = props;
    const initials = username ? getInitialsFromName(username): 'A'
    return(
        <Link href={`/dashboard/profiles/${userId}`}>
            <Avatar className={style} >
                <AvatarImage src={image_url} alt="user profile" />
                <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
        </Link>

    )
}
