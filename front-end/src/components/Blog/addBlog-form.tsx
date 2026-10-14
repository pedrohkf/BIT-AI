"use client"
import Button from '@/components/forms/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { generateBlog } from "@/services/blogs";

import styles from "./addBlog-form.module.css"

function FormButton({ loading }: { loading: boolean }) {
    return (
        <Button disabled={loading}>
            {loading ? "Criando..." : "Criar"}
        </Button>
    );
}

export default function AddBlog() {
    const router = useRouter();
    const { user } = useCurrentUser();
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (loading || !user || !message.trim()) return;
        setLoading(true);

        try {
            await generateBlog(message, user._id);
            router.push('/bit-ai/ias/blog');
        } catch (error) {
            console.error("Erro ao criar blog", error)
            setLoading(false);
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="Tema do Blog (dinheiro, futebol)..." value={message} onChange={(e) => setMessage(e.target.value)} />
                <FormButton loading={loading} />
            </form>
        </div>
    )
}
