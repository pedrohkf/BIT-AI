export type User = {
    _id: string;
    name: string;
    email: string;
}

export type StoredUser = User & {
    password: string;
}

export type Blog = {
    _id: string;
    writerName: string;
    createdAt: string;
    title: string;
    subTitle: string;
    complementTitle: string;
    catchyPhrase: string;
    introductoryText: string;
    developmentText: string;
    conclusion: string;
    img: string[];
    user: string;
    deleted: boolean;
    deletedAt?: string;
}

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

export type IA = {
    _id: string;
    name: string;
    description: string;
    prompt: string;
}

export type LeadSource = "blog" | "ebook";

export type Lead = {
    id: string;
    name: string;
    email: string;
    phone: string;
    source: LeadSource;
    createdAt: string;
    userId: string;
}
