import userGet from "@/actions/user-get";
import LeadsPage from "../../Components/Leads/LeadsPage";

export default async function Page() {
    const user = await userGet(); 

    return <LeadsPage user={user} />;
}
