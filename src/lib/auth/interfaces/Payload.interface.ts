import type {JWTPayload} from 'jose'
export default interface Payload extends JWTPayload{
    email?: string
    name?: string
    picture?: string
    given_name?: string
    family_name?: string
    locale?: string
}