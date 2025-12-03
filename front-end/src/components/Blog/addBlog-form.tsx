"use client"
import Button from '@/components/forms/button';
import { useBlogContext } from '@/context/BlogContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import userGet from "@/actions/user-get";

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
    const [userId, setUserId] = useState<string | null>(null)
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState(false);
    const { posts, setPosts } = useBlogContext()


    useEffect(() => {
        console.log("Componente montado");
        async function fetchUser() {
            const User = await userGet();
            setUserId(User?._id ?? null);
        }

        fetchUser();
    }, [])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        console.log("Formulário enviado");
        e.preventDefault()

        if (loading) return;
        setLoading(true);

        try {
            const response = await axios.post(`https://bit-ai-orcin.vercel.app/ia/groq/blog`, { theme: message, userId });

            const data = response.data;
            setPosts(data.response)
        } catch (error) {
            console.error("Erro ao criar blog", error)
        } finally {
            router.push('./');
        }

    }

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="Tema do Blog (dinheiro, futebol)..." value={message} onChange={(e) => setMessage(e.target.value)} />
                <FormButton loading={loading} />
            </form>
        </div>
    )
}