import { Lead, LeadSource } from "@/types/models";
import { loadCollection, saveCollection } from "@/lib/db";
import { newId } from "@/lib/storage";

export function listLeads(userId: string): Lead[] {
    return loadCollection("leads").filter((l) => l.userId === userId);
}

export type NewLead = {
    name: string;
    email: string;
    phone: string;
    source: LeadSource;
    userId: string;
};

export function addLead(data: NewLead): Lead {
    const lead: Lead = { ...data, id: newId(), createdAt: new Date().toISOString() };
    saveCollection("leads", [...loadCollection("leads"), lead]);
    return lead;
}
