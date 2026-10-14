"use client"

import { useEffect, useState } from "react";
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'
import { useLeads } from "@/hooks/useLeads";

import styles from "./LeadCounterPotential.module.css"

interface User {
    _id: string;
    name: string;
    email: string;
}

interface LeadCounterProps {
    user: User | undefined;
}

export default function LeadPotential({ user }: LeadCounterProps) {
    const { leads, loading } = useLeads(user?._id);
    const [precoMedio, setPrecoMedio] = useState(30);
    const [receita, setReceita] = useState(30);

    useEffect(() => {
        if (!leads.length) return;

        const clientes = leads.length * 0.03
        const receitaClientes = clientes * precoMedio;

        setReceita(receitaClientes);
    }, [leads, precoMedio]);


    if (loading) {
        return <div className={styles.containerLoading}><Ring
            size="30"
            stroke="5"
            bgOpacity="0"
            speed="2"
            color="white"
        /></div>;
    }


    return (
        <div className={styles.container}>
            <div className={styles.stats}>
                <h2>R$ {receita.toFixed(2)}</h2>
            </div>
            <p className={styles.subtitles}>
                Receita com produto de R$
                <input
                    className={styles.inlineInput}
                    type="text"
                    value={precoMedio.toString()}
                    onChange={(e) => setPrecoMedio(Number(e.target.value))}
                />
            </p>

        </div>

    );
}
