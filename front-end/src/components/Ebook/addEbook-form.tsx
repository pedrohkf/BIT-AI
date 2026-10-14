"use client"
import Button from '@/components/forms/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { generateEbook } from "@/services/ebooks";

function FormButton({ loading }: { loading: boolean }) {
    return (
        <Button disabled={loading}>
            {loading ? "Criando..." : "Criar"}
        </Button>
    );
}

export default function AddEbook() {
    const router = useRouter();
    const { user } = useCurrentUser();
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (loading || !user || !message.trim()) return;
        setLoading(true);

        try {
            await generateEbook(message, user._id);
            router.push('/bit-ai/ias/ebook');
        } catch (error) {
            console.error("Erro ao criar ebook", error)
            setLoading(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="Tema do Ebook..." value={message} onChange={(e) => setMessage(e.target.value)} />
                <FormButton loading={loading} />
            </form>
        </>
    )
}
