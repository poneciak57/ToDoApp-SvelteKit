import type IOIDCToken from '$auth/interfaces/OIDCToken.interface';
import type Payload from '$auth/interfaces/Payload.interface';
import type { UserInfo } from '$auth/interfaces/User.interface';
export default class OIDCToken implements IOIDCToken{
    public token: string;

    public sub?: string
    public iss?: string
    public exp?: number

    public user: UserInfo

    constructor(token:string,payload: Payload){

        this.sub = payload.sub
        this.iss = payload.iss
        this.exp = payload.exp

        this.token = token;
        this.user = {
            username: payload.name,
            email: payload.email,
            image: payload.picture,
            firstName: payload.given_name,
            lastName: payload.family_name
        };
    }
}