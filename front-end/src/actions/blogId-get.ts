"use server";
import axios from "axios";

export type Blog = {
    _id: string;
    writerName: string;
    createadAt: string;
    title: string;
    subTitle: string;
    complementTitle: string;
    catchyPhrase: string;
    introductoryText: string;
    developmentText: string;
    subText: string;
    complementText: string;
    conclusion: string;
    img: string;
    user: string;
}

export default async function FetchBlogsById(blogId: string): Promise<Blog | null> {
    const response = await axios.get(`https://bitai-back.vercel.app/blogs/bit-ai/${blogId}`)
    const data = response.data as Blog
    return data
}