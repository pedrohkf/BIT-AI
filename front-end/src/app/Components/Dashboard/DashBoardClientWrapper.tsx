"use client";
import dynamic from "next/dynamic";
import styles from "./DashboardClientWrapper.module.css"

const LeadCounterMonth = dynamic(() => import('./Leads/LeadCounterMonth'), {
  ssr: false,
  loading: () => <p>Carregando Leads do mês...</p>,
});
const LeadCounter = dynamic(() => import('./Leads/LeadsCounter'), {
  ssr: false,
  loading: () => <p>Carregando Contador de Leads...</p>,
});
const LeadPotential = dynamic(() => import('./Leads/LeadPotential'), {
  ssr: false,
  loading: () => <p>Calculando Potencial de Receita...</p>,
});
const DashboardClient = dynamic(() => import('./DashboardClient'), {
  ssr: false,
  loading: () => <p>Carregando Dashboard...</p>,
});

interface User {
  _id: string;
  name: string;
  email: string;
}


interface DashboardClientWrapperProps {
  user?: User;
}

export default function DashboardClientWrapper({ user }: DashboardClientWrapperProps) {
  return (
    <div>
      <div className={styles.rowOne}>
        <LeadCounterMonth user={user} />
        <LeadCounter user={user} />
        <LeadPotential user={user} />
      </div>
      <DashboardClient user={user} />
    </div>
  );
}
