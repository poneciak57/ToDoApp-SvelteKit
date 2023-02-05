import type { UserInfo } from '$auth/interfaces/User.interface';

export default interface OIDCToken{
    token: string

    sub?: string
    iss?: string
    exp?: number

    user: UserInfo
}
