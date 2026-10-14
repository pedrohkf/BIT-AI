"use client";

import { useCallback, useEffect, useState } from "react";
import SideMenu from '@/components/menu/SideMenu'
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { deleteBlogForever, listTrashedBlogs, restoreBlog } from "@/services/blogs";
import { Blog } from "@/types/models";

import styles from "./page.module.css"

export default function Page() {
    const { user } = useCurrentUser();
    const [data, setData] = useState<Blog[]>([]);

    const refresh = useCallback(() => {
        if (user) setData(listTrashedBlogs(user._id));
    }, [user]);

    useEffect(() => {
        refresh();
    }, [refresh]);

    function handleRestore(blogId: string) {
        restoreBlog(blogId);
        refresh();
    }

    function handleDelete(blogId: string) {
        if (!window.confirm("Excluir definitivamente este blog?")) return;
        deleteBlogForever(blogId);
        refresh();
    }

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.blogs}>
                {data.length === 0 && <p>A lixeira está vazia.</p>}
                {data.map((blogs) => (
                    <div key={blogs._id}>
                        <div className={styles.boxes}>
                            {blogs.title}
                            <div className={styles.buttons}>
                                <p onClick={() => handleRestore(blogs._id)} style={{ cursor: 'pointer' }}>Restaurar</p>
                                <p onClick={() => handleDelete(blogs._id)} style={{ cursor: 'pointer' }}>Excluir</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </div>
    )
}
