export const dynamic = "force-dynamic";
import userGet from '@/actions/user-get';
import DashboardClient from '@/app/Components/Dashboard/DashboardClient';
import LeadCounterMonth from '@/app/Components/Dashboard/Leads/LeadCounterMonth';
import LeadCounter from '@/app/Components/Dashboard/Leads/LeadsCounter';
import SideMenu from '@/app/Components/Menu/SideMenu';

import styles from "./dashboard.module.css"
import LeadPotential from '@/app/Components/Dashboard/Leads/LeadPotential';

export default async function Page() {
  const user = await userGet();

  return (
    <div className={styles.container}>
      <SideMenu />
      <div className={styles.content}>
        <div className={styles.rowOne}>
          <LeadCounterMonth user={user} />
          <LeadCounter user={user} />
          <LeadPotential user={user} />
        </div>
        <DashboardClient user={user} />
      </div>
    </div>

  );
}
