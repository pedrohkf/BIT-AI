import { Ebook } from "@/types/models";
import { loadCollection, saveCollection } from "@/lib/db";
import { delay, newId } from "@/lib/storage";
import { buildEbook } from "@/mocks/seed";
import { getCurrentUser } from "./auth";

export function listEbooks(userId: string): Ebook[] {
    return loadCollection("ebooks")
        .filter((e) => e.userId === userId)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getEbook(ebookId: string): Ebook | null {
    return loadCollection("ebooks").find((e) => e._id === ebookId) ?? null;
}

export async function generateEbook(theme: string, userId: string): Promise<Ebook> {
    await delay(2200);

    const author = { _id: userId, name: getCurrentUser()?.name ?? "Autor" };
    const ebook = buildEbook(theme, author, newId(), new Date().toISOString());

    saveCollection("ebooks", [...loadCollection("ebooks"), ebook]);
    return ebook;
}
