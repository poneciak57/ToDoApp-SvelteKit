import type User from "$auth/interfaces/User.interface"
import type Payload from '$auth/interfaces/Payload.interface';
import type { UserInfo } from '$auth/interfaces/User.interface';

export default interface OIDCToken{
    token: string

    sub?: string
    iss?: string
    exp?: number

    user: UserInfo
    toUser(): User
}
