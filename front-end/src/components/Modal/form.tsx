"use client"
import Button from '@/components/forms/button';
import { useState } from 'react';
import { addLead } from "@/services/leads";

import styles from "./form.module.css"

interface AddLeadProps {
  onClose: () => void;
  ownerId: string;
}

function FormButton({ loading }: { loading: boolean }) {
  return (
    <Button disabled={loading} className={styles.botaoSecundario}>
      {loading ? "Enviando..." : "Enviar"}
    </Button>
  );
}

export default function AddLead({ onClose, ownerId }: AddLeadProps) {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [loading, setLoading] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (loading || !name.trim() || !email.trim() || !phone.trim()) return;
        setLoading(true);

        // o lead pertence ao dono do blog, não a quem está lendo
        addLead({ name, email, phone, source: "blog", userId: ownerId });

        setLoading(false);
        onClose();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.forms}>

                <div className={styles.inputs}>
                    <div>
                        <p>Nome</p>
                        <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="text" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <p>Telefone</p>
                        <input type="text" placeholder="Digite seu telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <FormButton loading={loading} />
                <button type="button" onClick={onClose}>Não tenho interesse</button>
            </form>
        </>
    )
}