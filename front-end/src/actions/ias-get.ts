import axios from "axios";

export type IA = {
    _id: string;
    name: string;
    description: string;
    prompt: string;
}

export default async function FetchIAs(): Promise<IA[]> {
    const response = await axios.get('https://bitai-back.vercel.app/ias')

    const data = response.data as IA[]

    return data
}