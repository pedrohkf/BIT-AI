import styles from "./ias.module.css"
import SideMenu from '../../Components/Menu/SideMenu';
import FetchIAs from '@/actions/ias-get';
import Link from "next/link";

export default async function page() {
    const ias = await FetchIAs()

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.content}>
                <h3>IAs</h3>
                <div className={styles.ias}>
                    {ias.map((ia) =>
                        <Link href={'ias/' + ia.name.toLocaleLowerCase()} key={ia._id}>
                            <div className={styles.card}>
                                <h4>{ia.name}</h4>
                                <p>{ia.description}</p>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
