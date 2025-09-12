"use server";
import axios from "axios";
import { cookies } from "next/headers";

export type User = {
    _id: string;
    name: string;
    email: string;
}

export default async function userGet() {
    try {
        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value;

        if (!token) {
            throw new Error("Token não encontrado nos cookies");
        }

        const response = await axios.get('https://bitai-back.vercel.app/auth/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await response.data as User;

        return data;

    } catch (error) {
        console.error("Erro ao pegar usuário:", error);
        return undefined;
    }
}