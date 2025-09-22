import FetchEbooks from '@/actions/ebook-get'
import styles from "./ebook.module.css"
import React from 'react'
import SideMenu from '@/app/Components/Menu/SideMenu'
import Link from 'next/link';
import EbookList from '@/app/Components/Ebook/ebook-List';

export const dynamic = "force-dynamic";

export default async function page() {
    const ebooks = await FetchEbooks()

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.grid}>
                <h1>Meus Ebooks</h1>
                <div className={styles.newEbook}>
                    <Link href='ebook/addEbook'>+ Ebook</Link>
                </div>
                <div className={styles.content}>
                    <EbookList ebooks={ebooks} />
                </div>
            </div>

        </div>

    )
}
