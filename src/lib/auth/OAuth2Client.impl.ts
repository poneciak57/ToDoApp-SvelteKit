import type IOAuth2Client from '$auth/interfaces/Oauth2Client.interface';
import type Options from '$auth/interfaces/Options.interface';
import type Token from '$auth/interfaces/Token.interface';
import {createRemoteJWKSet, jwtVerify} from 'jose'
import type Payload from '$auth/interfaces/Payload.interface';
import OIDCToken from '$auth/OIDCToken.impl';

export default class OAuth2Client implements IOAuth2Client {
	public options: Options;
    
	constructor(options: Options) {
		this.options = options;
	}

	async verify(id_token: string): Promise<OIDCToken|false> {
        const JWKS = createRemoteJWKSet(new URL(this.options.JWK_URL))

        return jwtVerify(id_token, JWKS, {
            issuer: this.options.issuer,
            audience: this.options.clientId
        })
        .then((d) => d.payload as Payload)
        .then((payload) => new OIDCToken(id_token,payload))
        .catch(e => false)
    }
	async token_from_code(code: string): Promise<Token> {
        return fetch(this.options.TOKEN_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			body:`code=${code}&client_id=${this.options.clientId}&client_secret=${this.options.clientSecret}&grant_type=authorization_code&redirect_uri=${this.options.callback_uri}`
		})
        .then((response) => response.json())
		.then((data) => ({
            access_token: data.access_token,
            expires: data.expires_in,
            scope: data.scope,
            refresh_token: data.refresh_token,
            id_token: data.id_token
        }) satisfies Token);
	}
	async revoke_token(token: string): Promise<boolean> {
        return fetch(this.options.REVOKE_URL+"?token"+token,{
            method: "POST"
        }).then(response => response.ok)
    }
	async refresh_token(refresh_token: string): Promise<Token> {
        return fetch(this.options.TOKEN_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			body:`refresh_token=${refresh_token}&client_id=${this.options.clientId}&client_secret=${this.options.clientSecret}&grant_type=refresh_token`
		}).then((response) => response.json())
		    .then((data) => ({
                access_token: data.access_token,
                expires: data.expires_in,
                scope: data.scope,
                refresh_token: refresh_token,
            }) satisfies Token);
    }
	get_auth_url(state:string): string {
        return this.options.AUTH_URL+"?" + [
            "scope="+this.options.scopes?.join(" "),
            "access_type=offline",
            "response_type=code",
            "state="+state,
            "redirect_uri="+this.options.callback_uri,
            "client_id="+this.options.clientId,
            "prompt=consent"
        ].join("&")
    }
}
