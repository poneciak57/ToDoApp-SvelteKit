import type Options from "$auth/interfaces/Options.interface"
import type Token from "$auth/interfaces/Token.interface"
import type OIDCToken from '$auth/interfaces/OIDCToken.interface';

export default interface IOAuth2Client{
    options: Options

    verify(id_token: string): Promise<OIDCToken|undefined>
    token_from_code(code: string): Promise<Token>
    revoke_token(token: string): Promise<boolean>
    refresh_token(refresh_token: string): Promise<Token>
    get_auth_url(state:string): string
}