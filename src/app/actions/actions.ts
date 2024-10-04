'use server'

import User from "../models/model"
import connectDatabase from "../lib/mongoose"
import { revalidatePath } from "next/cache";

export async function createUser (formData: FormData)
{
    try {
        await connectDatabase();
        const name = formData.get('name')
        const email = formData.get('email')
        User.create({ name, email })

        revalidatePath('/');
    } catch (err) {
        console.log(err)
    }
}