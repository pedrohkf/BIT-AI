"use client"
import Button from '@/app/Components/forms/button';
import { useBlogContext } from '@/context/BlogContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import userGet from "@/actions/user-get";

import styles from "./form.module.css"

function FormButton({ loading }: { loading: boolean }) {
    return (
        <Button disabled={loading}>
            {loading ? "Criando..." : "Criar"}
        </Button>
    );
}

export default function AddLead({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);

    const [userId, setUserId] = useState<string | null>(null)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
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
            const response = await axios.post(`https://bit-ai-orcin.vercel.app/lead/add`, { name, email, phone, source: "blog", userId });

            const data = response.data;
        } catch (error) {
            console.error("Erro ao enviar Lead", error)
        } finally {
            setLoading(false);
            onClose();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.forms}>

                <div className={styles.inputs}>
                    <p>Nome</p>
                    <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                    <p>Email</p>
                    <input type="text" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <p>Telefone</p>
                    <input type="text" placeholder="Digite seu telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <FormButton loading={loading} />
                <p>     OU      </p>

                <button onClick={onClose}>não tenho interesse</button>
            </form>
        </>
    )
}