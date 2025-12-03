import styles from "./page.module.css"
import SideMenu from "@/components/Menu/SideMenu";
import FetchBlogs from '@/actions/blog-get';
import RedirectPageIcon from '@/components/Icons/RedirectPage';
import LinkIcon from '@/components/Icons/Link';
import Link from 'next/link';
import DeleteBlogButton from "@/components/Blog/DeleteBlogButton";
import Edit from "@/public/imgs/edit";

export const dynamic = "force-dynamic";

export default async function Blog() {
    const data = await FetchBlogs()

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.content}>
                <h1>Meus Blogs</h1>
                <div className={styles.menu}>
                    <div className={styles.newBlog}>
                        <Link href='blog/addBlog'>+ BLOG</Link>
                    </div>
                    <div className={styles.trash}>
                        <Link href='blog/trash'>Lixeira</Link>
                    </div>
                </div>
                <div className={styles.blogs}>
                    {data.map((blogs) => (
                        <div key={blogs._id}>
                            <div className={styles.boxes} style={{ backgroundImage: `url(${blogs.img[0]})` }}>
                                <div className={styles.opacity}>
                                    <p>{blogs.title}</p>
                                    <div className={styles.buttons}>
                                        <Link href={`blog/${blogs._id}/edit`}>
                                            <Edit />
                                        </Link>
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