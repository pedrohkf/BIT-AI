"use server";
import axios from "axios";
import userGet from "./user-get";

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

export default async function DeleteBlogs(blogId: string) {
    const user = await userGet()

    if (!user || !user._id) {
        throw new Error("User not found or user ID is undefined");
    }

    const response = await axios.delete(`https://bit-ai-back.vercel.app/blogs/${blogId}`, { data: { userId: user._id } })
    const data = response.data
    return data
}