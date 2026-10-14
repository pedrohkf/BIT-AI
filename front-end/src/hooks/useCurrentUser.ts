"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/models";
import { getCurrentUser, logout } from "@/services/auth";

// Lê o usuário da sessão. Se o cookie existir mas o usuário não (localStorage limpo), encerra a sessão.
export function useCurrentUser() {
    const router = useRouter();
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const current = getCurrentUser();

        if (!current) {
            logout();
            router.replace("/auth");
            return;
        }

        setUser(current);
        setLoading(false);
    }, [router]);

    return { user, loading };
}
