import type { PageServerLoad } from './$types';
import type UserToRegister from '$lib/UserToRegister.interface';
import { redirect, type Actions, error } from '@sveltejs/kit';
import { z } from 'zod';
import DbClient from '$db/PrismaClient';
import SessionClient from '$lib/SessionClient';
const RegisterSchema = z.object({
    username: z
        .string({ required_error: "Username is required" })
        .min(1,{ message: "Username is required" })
        .max(20,{ message: "Username can't be that long" })
        .trim(),
    firstName: z
        .string({ required_error: "First name is required" })
        .min(1,{ message: "First name is required" })
        .max(20,{ message: "First name is too long" })
        .trim(),
    lastName: z
        .string({ required_error: "Last name is required" })
        .min(1,{ message: "Last name is required" })
        .max(20, { message: "Last name can't be that long" })
        .trim(),
    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "U need to provide valid email address"}),
    password: z
        .string({ required_error: "Password is required" })
        .min(6,{ message: "Password is too short" }),
    passwordConfirm: z
        .string({ required_error: "Password confirm is required" })
        .min(1,{message: "Password confirm is required"})
}).refine((obj)=> obj.password == obj.passwordConfirm,{ message: "Password confirm must match password" ,path: ["passwordConfirm"]})

export const actions :Actions = {
    default: async ({request,cookies}) => {
        const formData = Object.fromEntries(await request.formData());
        
        const result = RegisterSchema.safeParse(formData);
        if(!result.success){
            const { fieldErrors: errors } = result.error.flatten();
            return {
                errors
            }
        }
        let CookieUser: UserToRegister|null = JSON.parse(cookies.get("googleUser")??"null")
        if(await DbClient.user.findFirst({ where:{ email: result.data.email }})){
            return {
                errors:{ email: ["Email is taken"] }
            }
        }

        cookies.delete("googleUser");
        const User = await DbClient.user.create({
            data: {
                id: undefined,
                username: result.data.username,
                email: result.data.email,
                firstName: result.data.firstName,
                lastName: result.data.lastName,
                googleId: CookieUser?.googleId,
                image: CookieUser?.image,
                password: result.data.password
            }
        })
        if(!(await SessionClient.start_session({user: User},cookies))){
            throw error(401,"Couldnt start session")
        }
        throw redirect(302,"/");
    }
};

export const load = (async ({cookies}) => {
    let user: UserToRegister = JSON.parse(cookies.get("googleUser")??"null")??{
        username: "",
        firstName: "",
        lastName: "",
        email: "",
    } satisfies UserToRegister;
    return {
        user: user
    };
}) satisfies PageServerLoad;