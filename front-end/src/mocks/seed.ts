import { Blog, Ebook, IA, Lead, StoredUser } from "@/types/models";
import { blogTemplates } from "./blogTemplates";
import { ebookTemplate } from "./ebookTemplate";
import { fillTheme } from "./fillTheme";

export const DEMO_USER: StoredUser = {
    _id: "demo",
    name: "Usuário Demo",
    email: "demo@bitai.com",
    password: "123456",
};

export const iasSeed: IA[] = [
    {
        _id: "ia-blog",
        name: "Blog",
        description: "Gere artigos completos para o seu blog a partir de um tema.",
        prompt: "Escreva um artigo de blog sobre o tema informado.",
    },
    {
        _id: "ia-ebook",
        name: "Ebook",
        description: "Crie ebooks estruturados em capítulos para capturar leads.",
        prompt: "Escreva um ebook sobre o tema informado.",
    },
];

const starterThemes = ["marketing digital", "produtividade", "finanças pessoais"];

const leadNames = [
    "Ana Souza", "Bruno Lima", "Carla Mendes", "Diego Alves", "Eduarda Rocha", "Felipe Costa",
    "Gabriela Nunes", "Henrique Dias", "Isabela Martins", "João Pereira", "Karina Teixeira", "Lucas Barbosa",
];

const DAY = 24 * 60 * 60 * 1000;

// Conteúdo inicial para a tela não ficar vazia: 3 blogs, 1 ebook e 12 leads.
export function createStarterData(user: Pick<StoredUser, "_id" | "name">, idPrefix: string) {
    const now = Date.now();

    const blogs: Blog[] = starterThemes.map((theme, index) => {
        const template = blogTemplates[index % blogTemplates.length];
        return {
            _id: `${idPrefix}-blog-${index + 1}`,
            writerName: user.name,
            createdAt: new Date(now - index * 2 * DAY).toISOString(),
            title: fillTheme(template.title, theme),
            subTitle: fillTheme(template.subTitle, theme),
            complementTitle: fillTheme(template.complementTitle, theme),
            catchyPhrase: fillTheme(template.catchyPhrase, theme),
            introductoryText: fillTheme(template.introductoryText, theme),
            developmentText: fillTheme(template.developmentText, theme),
            conclusion: fillTheme(template.conclusion, theme),
            img: template.img,
            user: user._id,
            deleted: false,
        };
    });

    const ebooks: Ebook[] = [buildEbook(starterThemes[0], user, `${idPrefix}-ebook-1`, new Date(now - 3 * DAY).toISOString())];

    const leads: Lead[] = leadNames.map((name, index) => {
        const slug = name.toLowerCase().normalize("NFD").replace(/[^a-z ]/g, "").replace(" ", ".");
        return {
            id: `${idPrefix}-lead-${index + 1}`,
            name,
            email: `${slug}@email.com`,
            phone: `119${String(80000000 + index * 1234567).slice(0, 8)}`,
            source: index % 3 === 0 ? "ebook" : "blog",
            // espalha os leads entre hoje e ~55 dias atrás
            createdAt: new Date(now - index * 4.6 * DAY).toISOString(),
            userId: user._id,
        };
    });

    return { blogs, ebooks, leads };
}

export function buildEbook(theme: string, user: Pick<StoredUser, "_id" | "name">, id: string, createdAt: string): Ebook {
    const t = ebookTemplate;
    return {
        _id: id,
        title: fillTheme(t.title, theme),
        authorName: user.name,
        subtitle: fillTheme(t.subtitle, theme),
        copyright: fillTheme(t.copyright, theme),
        chapterReaderAvatar: fillTheme(t.chapterReaderAvatar, theme),
        chapterStorytelling: fillTheme(t.chapterStorytelling, theme),
        chapterConnection: fillTheme(t.chapterConnection, theme),
        chapterIntroduction: fillTheme(t.chapterIntroduction, theme),
        chapterProblem: fillTheme(t.chapterProblem, theme),
        chapterSolution: fillTheme(t.chapterSolution, theme),
        chapterInterest: fillTheme(t.chapterInterest, theme),
        chapterDevelopment: fillTheme(t.chapterDevelopment, theme),
        chapterAttention: fillTheme(t.chapterAttention, theme),
        chapterDesire: fillTheme(t.chapterDesire, theme),
        chapterAction: fillTheme(t.chapterAction, theme),
        chapterCaseStudies: fillTheme(t.chapterCaseStudies, theme),
        chapterCTA: fillTheme(t.chapterCTA, theme),
        links: [],
        createdAt,
        userId: user._id,
    };
}
