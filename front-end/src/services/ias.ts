import { IA } from "@/types/models";
import { loadCollection } from "@/lib/db";

export function listIAs(): IA[] {
    return loadCollection("ias");
}
