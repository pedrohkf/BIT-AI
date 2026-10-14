"use client";

import { useEffect, useState } from "react";
import { listEbooks } from '@/services/ebooks'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { Ebook } from '@/types/models'
import styles from "./ebook.module.css"
import React from 'react'
import SideMenu from '@/components/menu/SideMenu'
import Link from 'next/link';
import EbookList from '@/components/Ebook/ebook-List';

export default function Page() {
    const { user } = useCurrentUser();
    const [ebooks, setEbooks] = useState<Ebook[]>([]);

    useEffect(() => {
        if (user) setEbooks(listEbooks(user._id));
    }, [user]);

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.grid}>
                <h1>Meus Ebooks</h1>
                <div className={styles.newEbook}>
                    <Link href='/bit-ai/ias/ebook/addEbook'>+ Ebook</Link>
                </div>
                <div className={styles.content}>
                    <EbookList ebooks={ebooks} />
                </div>
            </div>

        </div>

    )
}
