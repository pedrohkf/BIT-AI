import styles from "./page.module.css"
import SideMenu from "@/app/Components/Menu/SideMenu";
import FetchBlogs from '@/actions/blog-get';
import RedirectPageIcon from '@/app/Components/Icons/RedirectPage';
import LinkIcon from '@/app/Components/Icons/Link';
import Link from 'next/link';
import DeleteBlogButton from "@/app/Components/Blog/DeleteBlogButton";

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
                    {data.map((blogs) => (
                        <div key={blogs._id}>
                            <div className={styles.boxes} style={{ backgroundImage: `url(${blogs.img})` }}>
                                <div className={styles.opacity}>
                                    <p>{blogs.title}</p>
                                    <div className={styles.buttons}>
                                        <a
                                            href={`https://wa.me/?text=https://bit-ai.netlify.app/blogsPublic/${blogs._id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <LinkIcon />
                                        </a>
                                        <Link href={`../../blogsPublic/${blogs._id}`}>
                                            <RedirectPageIcon />
                                        </Link>
                                        <DeleteBlogButton blogId={blogs._id} />
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