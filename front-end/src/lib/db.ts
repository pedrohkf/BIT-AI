import { Blog, Ebook, IA, Lead, StoredUser } from "@/types/models";
import { DEMO_USER, createStarterData, iasSeed } from "@/mocks/seed";
import { readStorage, writeStorage } from "./storage";

type Collections = {
    users: StoredUser[];
    blogs: Blog[];
    ebooks: Ebook[];
    leads: Lead[];
    ias: IA[];
};

const SEEDED_KEY = "seeded";

function seed() {
    const starter = createStarterData(DEMO_USER, "demo");

    writeStorage("users", [DEMO_USER]);
    writeStorage("blogs", starter.blogs);
    writeStorage("ebooks", starter.ebooks);
    writeStorage("leads", starter.leads);
    writeStorage("ias", iasSeed);
    writeStorage(SEEDED_KEY, true);
}

// Popula o localStorage na primeira leitura (inclusive nas páginas públicas).
export function loadCollection<K extends keyof Collections>(key: K): Collections[K] {
    if (!readStorage<boolean>(SEEDED_KEY, false)) seed();
    return readStorage<Collections[K]>(key, [] as unknown as Collections[K]);
}

export function saveCollection<K extends keyof Collections>(key: K, value: Collections[K]) {
    writeStorage(key, value);
}

export function resetMockData() {
    seed();
}
