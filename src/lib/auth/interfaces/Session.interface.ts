import type { JWTPayload } from 'jose';
import type { User } from "@prisma/client";
export default interface Session extends JWTPayload{
    user:User
}