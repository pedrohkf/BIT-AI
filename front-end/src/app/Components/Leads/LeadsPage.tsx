"use client";

import { useEffect, useState } from "react";
import LeadsFilter from "./LeadsFilter";
import LeadsTable from "./TableLeads";

export default function LeadsPage({ user }) {
    const [leads, setLeads] = useState([]);
    const [filteredLeads, setFilteredLeads] = useState([]);

    useEffect(() => {
        if (!user?._id) return;

        fetch(`https://bit-ai-orcin.vercel.app/lead/${user._id}`)
            .then(res => res.json())
            .then(data => {
                setLeads(data);
                setFilteredLeads(data);
            });

    }, [user]);

    function handleFilterChange({ search, status }: { search: string; status: string }) {
        let result = leads.filter((l) =>
            l.name.toLowerCase().includes(search.toLowerCase())
        );

        if (status) result = result.filter((l) => l.status === status);

        setFilteredLeads(result);
    }

    return (
        <main className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Painel de Leads</h1>
            <LeadsFilter onFilterChange={handleFilterChange} />
            <LeadsTable leads={filteredLeads} />
        </main>
    );
}
