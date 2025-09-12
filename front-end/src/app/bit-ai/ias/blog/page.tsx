import styles from "./page.module.css"
import SideMenu from "@/app/Components/Menu/SideMenu";
import FetchBlogs from '@/actions/blog-get';
import RedirectPageIcon from '@/app/Components/Icons/RedirectPage';
import LinkIcon from '@/app/Components/Icons/Link';
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function Blog() {
    const data = await FetchBlogs()

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.content}>
                <h1>Meus Blogs</h1>
                <div className={styles.newBlog}>
                    <Link href='blog/addBlog'>+ BLOG</Link>
                </div>
                <div className={styles.blogs}>
                    {data.map((blogs) => <a key={blogs._id} href={'../../blogsPublic/' + blogs._id}>
                        <div className={styles.boxes}>
                            {blogs.title}
                            <div className={styles.buttons}>
                                <a href={`https://wa.me/?text=https://bit-ai.netlify.app/blogsPublic/` + blogs._id}>
                                    <LinkIcon />
                                </a>
                                <Link href={"/bit-ai/ias/blog/edit"}><RedirectPageIcon /></Link>
                            </div>
                        </div>
                    </a>)}
                </div>

            </div>
        </div>
    )
}