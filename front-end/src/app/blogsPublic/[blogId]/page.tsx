"use client"
import { getBlog, listBlogs } from "@/services/blogs"
import { Blog } from "@/types/models"
import styles from './Blog.module.css'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Modal from "../../../components/Modal/modal";

function formatDate(value?: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(value ? new Date(value) : new Date());
}

export default function Page() {
  const params = useParams();
  const blogId = params.blogId as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [blogsUser, setBlogsUser] = useState<Blog[]>([])

  useEffect(() => {
    const data = getBlog(blogId);

    setBlog(data);
    setBlogsUser(data ? listBlogs(data.user).filter((b) => b._id !== data._id) : []);
    setLoaded(true);
  }, [blogId])

  const dateBlog = formatDate(blog?.createdAt);

  if (loaded && (!blog || blog.deleted)) {
    return <div className={styles.container}><p>Blog não encontrado.</p></div>
  }

  return (
    <div className={styles.container}>
      {blog && <Modal ownerId={blog.user} />}
      <div className={styles.content}>
        {blog?.img?.length ? (
          <div className={styles.banner} style={{ backgroundImage: `url(${blog.img[5]})` }}>
            <div className={styles.title}>
              <h1>{blog?.title}</h1>
              <p>{blog?.catchyPhrase}</p>
            </div>
          </div>
        ) : (
          <p>Carregando imagem...</p>
        )}
        <div className={styles.filter}></div>

      </div>
      <div className={styles.text}>
        <li>{blog?.writerName}</li>
        <li>{dateBlog}</li>
        <p>Introdução</p>
        <p>{blog?.introductoryText}</p>
        <img src={blog?.img[1]} alt="" />
        <p>{blog?.complementTitle}</p>
        <img src={blog?.img[2]} alt="" />
        <p>{blog?.developmentText}</p>
        <img src={blog?.img[3]} alt="" />
        <p>Conclusão</p>
        <p>{blog?.conclusion}</p>
      </div>
      <div className={styles.allBlogs}>
        <h5>Recomendados para você</h5>
        {blogsUser.slice(0, 4).map((blog) => (
          <a key={blog._id} href={`/blogsPublic/${blog._id}`} className={styles.link}>
            <div className={styles.blogUserSection}>
              <div className={styles.blogUserBoxes}>
                <div className={styles.blogUser}>
                  <h4>{blog.title}</h4>
                  <p>{formatDate(blog.createdAt)}</p>
                </div>
                <div>
                  <img
                    src={blog.img[5]}
                  />
                </div>
              </div>
              <hr />
            </div>
          </a>
        ))}

      </div>
    </div >
  )
}