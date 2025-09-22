import styles from "./PlanList.module.css"

interface PlanListProps {
    plan: string;
    price: string;
    description: string;
    topics: string;
    typePlan: string;
    popular: boolean;
}

export default function PlanList({ plan, price, description, topics, typePlan, popular }: PlanListProps) {
    return (
        <div className={popular ? styles.border : ""}>
            {popular && <p>RECOMENDADO</p>}
            <div className={styles.card}>
                <div className={popular ? styles.titlePopular : styles.title}>
                    <h2>{plan}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.pricePlan}>
                    <p>R$ </p>
                    <h3>{price}</h3>
                </div>
                <p className={styles.typePlan}>{typePlan}</p>
                <div>
                    {topics}
                </div>
                <button>ADIQUIRIR</button>
            </div >
        </div >
    )
}