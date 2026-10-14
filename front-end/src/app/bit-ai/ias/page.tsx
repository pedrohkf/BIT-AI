"use client";

import { useEffect, useState } from "react";
import styles from "./ias.module.css"
import SideMenu from "@/components/menu/SideMenu";
import { listIAs } from '@/services/ias';
import { IA } from "@/types/models";
import Link from "next/link";

export default function Page() {
    const [ias, setIas] = useState<IA[]>([]);

    useEffect(() => {
        setIas(listIAs());
    }, []);

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.content}>
                <h3>IAs</h3>
                <div className={styles.ias}>
                    {ias.map((ia) =>
                        <Link href={'/bit-ai/ias/' + ia.name.toLocaleLowerCase()} key={ia._id}>
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
