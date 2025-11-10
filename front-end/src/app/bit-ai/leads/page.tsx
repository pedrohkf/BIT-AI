import userGet from "@/actions/user-get";
import LeadsPage from "../../Components/Leads/LeadsPage";

export default async function Page() {
    const user = await userGet(); // roda no servidor, pega o token dos cookies

    return <LeadsPage user={user} />;
}
