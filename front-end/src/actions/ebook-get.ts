"use server";
import axios from "axios";
import userGet from "./user-get";

export type Ebook = {
    _id: string;
    cape?: string;
    title: string;
    authorName?: string;
    subtitle: string;
    copyright: string;
    chapterReaderAvatar: string;
    chapterStorytelling: string;
    chapterConnection: string;
    chapterIntroduction: string;
    chapterProblem: string;
    chapterSolution: string;
    chapterInterest: string;
    chapterDevelopment: string;
    chapterAttention: string;
    chapterDesire: string;
    chapterAction: string;
    chapterCaseStudies: string;
    chapterCTA: string;
    links: string[];
    contact?: string;
    createdAt: string;
    userId: string;
};

export default async function FetchEbooks() {
    const idUser = await userGet()

    if (!idUser || !idUser._id) {
        throw new Error("User not found or user ID is undefined");
    }

    const response = await axios.get(`https://bitai-back.vercel.app/ebooks/${idUser._id}`)

    const data = response.data as Ebook[]

    return data
}