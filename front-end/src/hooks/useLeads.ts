"use client";

import { useEffect, useState } from "react";
import { Lead } from "@/types/models";
import { listLeads } from "@/services/leads";

export function useLeads(userId?: string) {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) return;

        setLeads(listLeads(userId));
        setLoading(false);
    }, [userId]);

    return { leads, loading };
}
