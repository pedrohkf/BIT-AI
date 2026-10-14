"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import LeadsPage from "../../../components/Leads/LeadsPage";

export default function Page() {
    const { user, loading } = useCurrentUser();

    if (loading) return null;

    return <LeadsPage user={user} />;
}
