import { StoredUser, User } from "@/types/models";
import { loadCollection, saveCollection } from "@/lib/db";
import { clearSessionToken, getSessionToken, setSessionToken } from "@/lib/session";
import { delay, newId } from "@/lib/storage";
import { createStarterData } from "@/mocks/seed";

export type AuthResult = { success: boolean; message?: string };

const toUser = ({ _id, name, email }: StoredUser): User => ({ _id, name, email });

export async function login(email: string, password: string): Promise<AuthResult> {
    await delay(500);

    const user = loadCollection("users").find(
        (u) => u.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (!user || user.password !== password) {
        return { success: false, message: "Email ou senha inválidos." };
    }

    setSessionToken(user._id);
    return { success: true };
}

export async function register(name: string, email: string, password: string): Promise<AuthResult> {
    await delay(500);

    const users = loadCollection("users");
    const normalizedEmail = email.trim().toLowerCase();

    if (users.some((u) => u.email.toLowerCase() === normalizedEmail)) {
        return { success: false, message: "Este email já está cadastrado." };
    }

    const user: StoredUser = {
        _id: newId(),
        name: name.trim(),
        email: normalizedEmail,
        password,
    };

    const starter = createStarterData(user, user._id);

    saveCollection("users", [...users, user]);
    saveCollection("blogs", [...loadCollection("blogs"), ...starter.blogs]);
    saveCollection("ebooks", [...loadCollection("ebooks"), ...starter.ebooks]);
    saveCollection("leads", [...loadCollection("leads"), ...starter.leads]);

    setSessionToken(user._id);
    return { success: true };
}

export function logout() {
    clearSessionToken();
}

// O token da sessão (cookie) é o id do usuário.
export function getCurrentUser(): User | undefined {
    const token = getSessionToken();
    if (!token) return undefined;

    const user = loadCollection("users").find((u) => u._id === token);
    return user ? toUser(user) : undefined;
}
