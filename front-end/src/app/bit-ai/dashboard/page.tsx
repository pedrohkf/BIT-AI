"use client";

import { useCurrentUser } from '@/hooks/useCurrentUser';
import SideMenu from '@/components/menu/SideMenu';
import DashboardClientWrapper from '@/components/Dashboard/DashBoardClientWrapper';
import styles from "./dashboard.module.css"

export default function Page() {
  const { user, loading } = useCurrentUser();

  return (
    <div className={styles.container}>
      <SideMenu />
      <div className={styles.content}>
        {!loading && <DashboardClientWrapper user={user} />}
      </div>
    </div>
  );
}
