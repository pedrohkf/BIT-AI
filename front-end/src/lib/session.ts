const COOKIE_NAME = "token";
const ONE_DAY = 60 * 60 * 24;

export function setSessionToken(token: string) {
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(token)}; path=/; max-age=${ONE_DAY}; samesite=lax`;
}

export function getSessionToken(): string | undefined {
    const match = document.cookie
        .split("; ")
        .find((item) => item.startsWith(`${COOKIE_NAME}=`));

    return match ? decodeURIComponent(match.split("=")[1]) : undefined;
}

export function clearSessionToken() {
    document.cookie = `${COOKIE_NAME}=; path=/; max-age=0`;
}
