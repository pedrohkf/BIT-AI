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

export default async function FetchBlogs() {
    const idUser = await userGet()

    if (!idUser || !idUser._id) {
        throw new Error("User not found or user ID is undefined");
    }

    const response = await axios.get(`https://bitai-back.vercel.app/blogs/${idUser._id}`)

    const data = response.data as Blog[]

    return data
}