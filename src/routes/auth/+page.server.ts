import type { Actions } from "@sveltejs/kit";
import DbClient from '$db/PrismaClient';
import SessionClient from '$lib/SessionClient';
import { error, redirect } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({request,cookies}) => {
        const data = await request.formData();

        const email = data.get("email")?.toString()??"";
        const password = data.get("password")?.toString()??"";
        let user = await DbClient.user.findFirst({
            where:{
                email: email,
                password: password
            }
        })
        if(user == null){
            return {
                error: "Email or password is incorect"
            }
        }
        if(!(await SessionClient.start_session({ user: user },cookies))){
            throw error(401,"Couldnt start session")
        }
        throw redirect(302,"/")
    }
};