const PREFIX = "bitai:";

export function readStorage<T>(key: string, fallback: T): T {
    try {
        const raw = window.localStorage.getItem(PREFIX + key);
        return raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
        return fallback;
    }
}

export function writeStorage<T>(key: string, value: T) {
    try {
        window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (error) {
        console.error("Erro ao gravar no localStorage", error);
    }
}

export function newId() {
    return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
