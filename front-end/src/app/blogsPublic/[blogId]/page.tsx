"use client"
import FetchBlogsById, { Blog } from "@/actions/blogId-get"
import styles from './Blog.module.css'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FetchBlogs from "@/actions/blog-get";

export default function Page() {
  const params = useParams();
  const blogId = params.blogId as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [blogsUser, setBlogsUser] = useState<Blog[]>([])
  const [dateBlog, setDateBlog] = useState<string>()

  useEffect(() => {
    async function fetchBlog() {
      const data = await FetchBlogsById(blogId);
      setBlog(data);

      const date = data?.createadAt ? new Date(data.createadAt) : null;


      const formattedDate = new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "America/Sao_Paulo",
      }).format(date ?? new Date());


      setDateBlog(formattedDate)
    }

    async function fetchAllBlogs() {
      const data = await FetchBlogs();
      setBlogsUser(data);
    }

    fetchBlog()
    fetchAllBlogs()
  }, [blogId])

  return (
    <div className={styles.container}>
      <h1>{blog?.title}</h1>
      <p id={styles.catchyPhrase}>{blog?.catchyPhrase}</p>
      <ul>
        <li>{blog?.writerName}</li>
        <li>{dateBlog}</li>
      </ul>
      <div className={styles.content}>
        <p>{blog?.introductoryText}</p>
        <img src={blog?.img} alt="Imagem do blog" />
        <p>{blog?.complementTitle}</p>
        <p>{blog?.developmentText}</p>
        <p>{blog?.conclusion}</p>
      </div>
      <div className={styles.allBlogs}>
        {blogsUser.map((blog) => (
          <a key={blog._id} href={blog._id} className={styles.link}>
            <div className={styles.blogUserSection}>
              <div className={styles.blogUserBoxes}>
                <div className={styles.blogUser}>
                  <h4>{blog.title}</h4>
                  <p>{dateBlog}</p>
                </div>
                <div>
                  <img src={blog.img} alt="" />
                </div>
              </div>
              <hr />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}