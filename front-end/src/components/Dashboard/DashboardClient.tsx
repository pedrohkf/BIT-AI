"use client";

import { useLeads } from "@/hooks/useLeads";
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
    const { leads: filteredLeads } = useLeads(user?._id);

    return (
        <div className={styles.content}>
            <LeadsTable leads={filteredLeads} />
        </div>
    );

}
