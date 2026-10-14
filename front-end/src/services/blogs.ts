import { Blog } from "@/types/models";
import { loadCollection, saveCollection } from "@/lib/db";
import { delay, newId } from "@/lib/storage";
import { blogTemplates } from "@/mocks/blogTemplates";
import { fillTheme } from "@/mocks/fillTheme";
import { getCurrentUser } from "./auth";

const byNewest = (a: Blog, b: Blog) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

export function listBlogs(userId: string): Blog[] {
    return loadCollection("blogs").filter((b) => b.user === userId && !b.deleted).sort(byNewest);
}

export function listTrashedBlogs(userId: string): Blog[] {
    return loadCollection("blogs").filter((b) => b.user === userId && b.deleted).sort(byNewest);
}

export function getBlog(blogId: string): Blog | null {
    return loadCollection("blogs").find((b) => b._id === blogId) ?? null;
}

function patchBlog(blogId: string, changes: Partial<Blog>) {
    const blogs = loadCollection("blogs").map((b) => (b._id === blogId ? { ...b, ...changes } : b));
    saveCollection("blogs", blogs);
}

// Simula a IA: sorteia um dos textos prontos e aplica o tema.
export async function generateBlog(theme: string, userId: string): Promise<Blog> {
    await delay(1800);

    const template = blogTemplates[Math.floor(Math.random() * blogTemplates.length)];
    const blog: Blog = {
        _id: newId(),
        writerName: getCurrentUser()?.name ?? "Autor",
        createdAt: new Date().toISOString(),
        title: fillTheme(template.title, theme),
        subTitle: fillTheme(template.subTitle, theme),
        complementTitle: fillTheme(template.complementTitle, theme),
        catchyPhrase: fillTheme(template.catchyPhrase, theme),
        introductoryText: fillTheme(template.introductoryText, theme),
        developmentText: fillTheme(template.developmentText, theme),
        conclusion: fillTheme(template.conclusion, theme),
        img: template.img,
        user: userId,
        deleted: false,
    };

    saveCollection("blogs", [...loadCollection("blogs"), blog]);
    return blog;
}

export type BlogChanges = Pick<
    Blog,
    "title" | "subTitle" | "catchyPhrase" | "introductoryText" | "developmentText" | "conclusion" | "img"
>;

export function updateBlog(blogId: string, changes: BlogChanges) {
    patchBlog(blogId, changes);
}

export function trashBlog(blogId: string) {
    patchBlog(blogId, { deleted: true, deletedAt: new Date().toISOString() });
}

export function restoreBlog(blogId: string) {
    patchBlog(blogId, { deleted: false, deletedAt: undefined });
}

export function deleteBlogForever(blogId: string) {
    saveCollection("blogs", loadCollection("blogs").filter((b) => b._id !== blogId));
}
