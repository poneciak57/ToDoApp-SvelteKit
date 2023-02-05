import type { PageServerLoad } from './$types';
import type UserToRegister from '$lib/UserToRegister.interface';
import type { Actions } from '@sveltejs/kit';
import { z } from 'zod';
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
        console.log("success")
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