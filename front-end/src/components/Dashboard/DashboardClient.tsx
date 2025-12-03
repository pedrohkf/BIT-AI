"use client";

import { useEffect, useState } from "react";
import LeadsTable from "../Leads/TableLeads";

import styles from "./DashboardClient.module.css"

interface User {
    _id: string;
    name: string;
    email: string;
}

interface LeadsPageProps {
    user: User | undefined;
}

export default function DashboardClient({ user }: LeadsPageProps) {
    const [filteredLeads, setFilteredLeads] = useState([]);

    useEffect(() => {
        if (!user?._id) return;

        fetch(`https://bit-ai-orcin.vercel.app/lead/${user._id}`)
            .then((res) => res.json())
            .then((data) => {
                setFilteredLeads(data);
            });
    }, [user]);

    return (
        <div className={styles.content}>
            <LeadsTable leads={filteredLeads} />
        </div>
    );

}
