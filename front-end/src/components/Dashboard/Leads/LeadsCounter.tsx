"use client"

import { useEffect, useState } from "react";
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'
import { useLeads } from "@/hooks/useLeads";

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
    const { leads, loading } = useLeads(user?._id);
    const [atual, setAtual] = useState(0);

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
