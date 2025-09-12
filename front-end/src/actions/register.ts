"use server";

import axios from "axios";

export default async function register(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name) {
        return { success: false, message: 'O campo nome é obrigatório.' }
    }

    if (!email) {
        return { success: false, message: 'O campo email é obrigatório.' }
    }

    if (!password) {
        return { success: false, message: 'O campo email é obrigatório.' }

    }

    const response = await axios.post("https://bit-ai-back.vercel.app/auth/register", {
        name,
        email,
        password
    })

    const data = response.data;

    return data;

}