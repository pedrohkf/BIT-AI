import SideMenu from '@/app/Components/Menu/SideMenu'
import React from 'react'

import styles from "./page.module.css"
import DeletedBlogs from '@/actions/blogsTrash-get'

export const dynamic = 'force-dynamic';

export default async function page() {
    const data = await DeletedBlogs();

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.blogs}>
                {data.map((blogs) => (
                    <div key={blogs._id}>
                        <div className={styles.boxes} style={{ backgroundImage: `url(${blogs.img[0]})` }}>
                            <div className={styles.opacity}>
                                <p>{blogs.title}</p>
                                <div className={styles.buttons}>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </div>
    )
}
