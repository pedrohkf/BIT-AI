import styles from "./page.module.css"
import PlanList from "../Components/PlanList/PlanList"

export default function page() {
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.plans}>
                <PlanList plan={"Básico"} description={"Para pessoas a frente do seu tempo"} price={"20.90"} topics={"blog"} typePlan={"mensal"} popular={false} />

                <PlanList plan={"Completo"} description={"Para pessoas a frente do seu tempo"} price={"44.90"} topics={"blog"} typePlan={"mensal"} popular={true} />

                <PlanList plan={"Avançado"} description={"Para pessoas a frente do seu tempo"} price={"59.90"} topics={"blog"} typePlan={"mensal"} popular={false} />
            </div>
        </div>
    )
}
