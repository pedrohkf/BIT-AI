"use client";

import { useEffect, useState } from "react";
import LeadsFilter from "./LeadsFilter";
import LeadsTable from "./TableLeads";

import { Lead } from "@/types/lead";
import SideMenu from "../menu/SideMenu";

import styles from "./LeadPage.module.css"

interface User {
    _id: string;
    name: string;
    email: string;
}

interface LeadsPageProps {
    user: User | undefined;
}

export default function LeadsPage({ user }: LeadsPageProps) {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);



    useEffect(() => {
        if (!user?._id) return;

        fetch(`https://bit-ai-orcin.vercel.app/lead/${user._id}`)
            .then(res => res.json())
            .then(data => {
                setLeads(data);
                setFilteredLeads(data);
            });

    }, [user]);

    function handleFilterChange({ search, filtro }: { search: string; filtro: string }) {
        let result = leads.filter((l) =>
            l.name.toLowerCase().includes(search.toLowerCase())
        );

        if (filtro === "hoje") {
            const hoje = new Date();
            result = result.filter((l) => {
                const dataLead = new Date(l.createdAt);
                return (
                    dataLead.getDate() === hoje.getDate() &&
                    dataLead.getMonth() === hoje.getMonth() &&
                    dataLead.getFullYear() === hoje.getFullYear()
                );
            });
        }

        if (filtro === "antigo") {
            const hoje = new Date();
            const trintaDiasAtras = new Date();
            trintaDiasAtras.setDate(hoje.getDate() - 30);

            result = result.filter((l) => {
                const dataLead = new Date(l.createdAt);
                return dataLead < trintaDiasAtras;
            });
        }


        if (filtro === "7dias") {
            const hoje = new Date();
            const seteDiasAtras = new Date();
            seteDiasAtras.setDate(hoje.getDate() - 7);

            result = result.filter((l) => {
                const dataLead = new Date(l.createdAt);
                return dataLead >= seteDiasAtras && dataLead <= hoje;
            });
        }

        if (filtro === "30dias") {
            const hoje = new Date();
            const trintaDiasAtras = new Date();
            trintaDiasAtras.setDate(hoje.getDate() - 30);

            result = result.filter((l) => {
                const dataLead = new Date(l.createdAt);
                return dataLead >= trintaDiasAtras && dataLead <= hoje;
            });
        }

        if (filtro === "novo") {
            result = [...result].sort((a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }


        setFilteredLeads(result);
    }


    return (
        <div className={`bg-gray-50 min-h-screen ${styles.container}`}>
            <SideMenu />
            <div className={styles.content}>
                <h1 className="text-2xl font-semibold mb-6 text-gray-800">Painel de Leads</h1>
                <LeadsFilter onFilterChange={handleFilterChange} />
                <LeadsTable leads={filteredLeads} />
            </div>
        </div>
    );
}
