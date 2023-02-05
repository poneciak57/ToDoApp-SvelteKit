import DbClient from '$db/PrismaClient';
import { error, fail, type Actions } from '@sveltejs/kit';
import { z } from 'zod';
import type { PageServerLoad } from './$types';

const ItemScheme = z.object({
    id: z.string().optional(),
    title: z
        .string({ required_error: "Title is required" })
        .min(1,{ message: "Title is required" })
        .trim(),
    content: z
        .string({ required_error: "Content is required" })
        .min(1,{ message: "Content is required" }),
    done: z.enum(['on']).optional(),
});

const checkScheme = async (request: Request) =>{
    const formData = Object.fromEntries(await request.formData());
    const result = ItemScheme.safeParse(formData);
    if(!result.success){
        const { fieldErrors: errors } = result.error.flatten();
        return { errors }
    }
    return {
        data: result.data
    }
}
export const actions: Actions = {
    update: async ({request,locals}) => {
        const scheme = await checkScheme(request);
        if(scheme?.errors ){ return fail(400,scheme)}
        if(scheme.data.id === undefined){ throw error(400,"Item id was not specified")}
        await DbClient.item.update({
            where:{
                id: parseInt(scheme.data.id),
                authorId: locals.session.user.id
            },
            data:{
                content: scheme.data.content,
                title: scheme.data.title,
                done: scheme.data.done == "on"
            }
        });
        return {}
    },
    new: async ({request,locals}) => {
        const scheme = await checkScheme(request);
        if(scheme?.errors){ return fail(400,scheme)}
        await DbClient.item.create({
            data:{
                title: scheme.data.title,
                content: scheme.data.content,
                done: scheme.data.done == "on",
                authorId: locals.session.user.id
            }
        })
        return {}
    },
    delete: async ({request,locals}) => {
        const formData = Object.fromEntries(await request.formData());
        try{
            await DbClient.item.delete({
                where: {
                    id: parseInt(formData.id),
                    authorId: locals.session.user.id
                }
            })
        }catch{
            throw error(500,"Couldn't delete the item");
        }
    }
};

export const load = (async ({locals}) => {
    return {
        items: await DbClient.item.findMany({
            where: {
                authorId: locals.session.user.id
            },
            orderBy:{
                id:"asc"
            }
        })
    };
}) satisfies PageServerLoad;