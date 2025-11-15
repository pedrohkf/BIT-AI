"use client"

import { useEffect, useState } from "react";
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'
import { Lead } from "@/types/lead";

import styles from "./LeadCounterMonth.module.css"

import ArrowUp from "../../../../../public/imgs/arrow-up";
import ArrowDown from "../../../../../public/imgs/arrow-down";



interface User {
    _id: string;
    name: string;
    email: string;
}

interface LeadCounterProps {
    user: User | undefined;
}

export default function LeadCounter({ user }: LeadCounterProps) {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [atual, setAtual] = useState(0);
    const [anterior, setAnterior] = useState(0);
    const [diferenca, setDiferenca] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(`https://bit-ai-orcin.vercel.app/lead/${user?._id}`)
            .then(r => r.json())
            .then(data => setLeads(data))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (!leads.length) return;

        const hoje = new Date();
        const mesAtual = hoje.getMonth();
        const mesAnterior = mesAtual === 0 ? 11 : mesAtual - 1;
        const anoAtual = hoje.getFullYear();
        const anoAnterior = mesAnterior === 11 ? anoAtual - 1 : anoAtual;

        const leadsMesAtual = leads.filter(lead => {
            const d = new Date(lead.createdAt);
            return (
                d.getMonth() === mesAtual &&
                d.getFullYear() === anoAtual
            );
        });

        const leadsMesAnterior = leads.filter(lead => {
            const d = new Date(lead.createdAt);
            return (
                d.getMonth() === mesAnterior &&
                d.getFullYear() === anoAnterior
            );
        });

        setAtual(leadsMesAtual.length);
        setAnterior(leadsMesAnterior.length);
        setDiferenca(leadsMesAtual.length - leadsMesAnterior.length);
    }, [leads]);


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
                <h2>{atual}</h2>
                {diferenca > 0 ? (
                    <div className={styles.up}>
                        <ArrowUp />
                        <p>{diferenca}</p>
                    </div>
                ) : (
                    <div className={styles.down}>
                        <ArrowDown />
                        <p>{Math.abs(diferenca)}</p>
                    </div>
                )}
            </div>

            <p className={styles.subtitles}>Ultimos 30 dias</p>

        </div>

    );
}
