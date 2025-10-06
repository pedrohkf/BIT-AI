import SideMenu from '@/app/Components/Menu/SideMenu'
import React from 'react'

import styles from "./page.module.css"
import DeletedBlogs from '@/actions/blogsTrash-get'

export const dynamic = "force-dynamic";

export default async function page() {
    const data = await DeletedBlogs();

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.blogs}>
                {data.map((blogs) => (
                    <div key={blogs._id}>
                        <a href={`../../blogsPublic/${blogs._id}`}>
                            <div className={styles.boxes}>
                                {blogs.title}
                                <div className={styles.buttons}>
                                    <p>Restaurar</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div >
        </div>
    )
}
