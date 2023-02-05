export default interface Options{
    AUTH_URL: string
    REFRESH_URL: string
    TOKEN_URL: string
    REVOKE_URL: string
    JWK_URL: string
    
    callback_uri: string

    clientId: string
    clientSecret: string
    issuer: string

    scopes: string[]
}