"use client";

import { useState, useEffect } from "react";

interface FilterProps {
    onFilterChange: (filters: { search: string; status: string }) => void;
}

export default function LeadsFilter({ onFilterChange }: FilterProps) {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        onFilterChange({ search, status });
    }, [search, status]);

    return (
        <div className="flex flex-wrap gap-4 mb-6 items-end">
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Buscar por nome</label>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Digite o nome..."
                    className="border border-gray-300 rounded-xl px-3 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border border-gray-300 rounded-xl px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Todos</option>
                    <option value="Novo">Novo</option>
                    <option value="Em Contato">Em Contato</option>
                    <option value="Convertido">Convertido</option>
                </select>
            </div>
        </div>
    );
}