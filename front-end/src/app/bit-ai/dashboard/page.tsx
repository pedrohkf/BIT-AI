import userGet from '@/actions/user-get';
import SideMenu from '@/app/Components/Menu/SideMenu';
import DashboardClientWrapper from '@/app/Components/Dashboard/DashBoardClientWrapper';
import styles from "./dashboard.module.css"

export default async function Page() {
  const user = await userGet();

  return (
    <div className={styles.container}>
      <SideMenu />
      <div className={styles.content}>
        <DashboardClientWrapper user={user} />
      </div>
    </div>
  );
}
