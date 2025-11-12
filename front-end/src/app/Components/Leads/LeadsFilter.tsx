"use client";

import { useState, useEffect } from "react";

interface FilterProps {
    onFilterChange: (filters: { search: string; filtro: string }) => void;
}

export default function LeadsFilter({ onFilterChange }: FilterProps) {
    const [search, setSearch] = useState("");
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        onFilterChange({ search, filtro});
    }, [search, filtro]);

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

                <label className="text-sm font-medium mb-1">Período</label>
                <select value={filtro} onChange={(e) => setFiltro(e.target.value)} className="border border-gray-300 rounded-xl px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="">Todos</option>
                    <option value="hoje">Hoje</option>
                    <option value="7dias">Últimos 7 dias</option>
                    <option value="30dias">Últimos 30 dias</option>
                    <option value="antigo">Antigos</option>
                    <option value="novo">Novos</option>
                </select>
            </div>
        </div>
    );
}