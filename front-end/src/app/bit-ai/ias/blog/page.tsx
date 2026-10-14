"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css"
import SideMenu from "@/components/menu/SideMenu";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { listBlogs } from '@/services/blogs';
import { Blog as BlogType } from "@/types/models";
import RedirectPageIcon from '@/components/Icons/RedirectPage';
import LinkIcon from '@/components/Icons/Link';
import Link from 'next/link';
import DeleteBlogButton from "@/components/Blog/DeleteBlogButton";
import Edit from "@/public/imgs/edit";

export default function Blog() {
    const { user } = useCurrentUser();
    const [data, setData] = useState<BlogType[]>([]);

    const refresh = useCallback(() => {
        if (user) setData(listBlogs(user._id));
    }, [user]);

    useEffect(() => {
        refresh();
    }, [refresh]);

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.content}>
                <h1>Meus Blogs</h1>
                <div className={styles.menu}>
                    <div className={styles.newBlog}>
                        <Link href='/bit-ai/ias/blog/addBlog'>+ BLOG</Link>
                    </div>
                    <div className={styles.trash}>
                        <Link href='/bit-ai/ias/blog/trash'>Lixeira</Link>
                    </div>
                </div>
                <div className={styles.blogs}>
                    {data.map((blogs) => (
                        <div key={blogs._id}>
                            <div className={styles.boxes} style={{ backgroundImage: `url(${blogs.img[0]})` }}>
                                <div className={styles.opacity}>
                                    <p>{blogs.title}</p>
                                    <div className={styles.buttons}>
                                        <Link href={`/bit-ai/ias/blog/${blogs._id}/edit`}>
                                            <Edit />
                                        </Link>
                                        <a
                                            href={`https://wa.me/?text=${encodeURIComponent(`${window.location.origin}/blogsPublic/${blogs._id}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <LinkIcon />
                                        </a>
                                        <Link href={`/blogsPublic/${blogs._id}`}>
                                            <RedirectPageIcon />
                                        </Link>
                                        <DeleteBlogButton blogId={blogs._id} onDeleted={refresh} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div >

            </div >
        </div >
    )
}
