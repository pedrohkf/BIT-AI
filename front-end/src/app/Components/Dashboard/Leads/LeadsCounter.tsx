"use client"

import { useEffect, useState } from "react";
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'
import { Lead } from "@/types/lead";

import styles from "./LeadCounterMonth.module.css"

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

        setAtual(leads.length);
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
            </div>

            <p className={styles.subtitles}>Total de Leads</p>

        </div>

    );
}
