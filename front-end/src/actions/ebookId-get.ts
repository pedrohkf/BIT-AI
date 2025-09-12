"use server";
import axios from "axios";
import Ebook from './ebook-get';

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
}

export default async function FetchEbookById(ebookId: string): Promise<Ebook | null> {
    const response = await axios.get(`https://bitai-back.vercel.app/ebooks/bit-ai/${ebookId}`)
    const data = response.data as Ebook
    return data
}