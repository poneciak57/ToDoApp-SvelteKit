import type { JWTPayload } from 'jose';
import type User from '$auth/interfaces/User.interface';
export default interface Session extends JWTPayload{
    user:User
}