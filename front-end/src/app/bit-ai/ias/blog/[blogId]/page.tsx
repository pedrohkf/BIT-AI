"use client"
import { getBlog } from "@/services/blogs"
import { Blog } from "@/types/models"
import styles from './Blog.module.css'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const blogId = params.blogId as string;

  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {

    setBlog(getBlog(blogId));
  }, [blogId])


  return (
    <div className={styles.container}>
      <h1>{blog?.title}</h1>
      <p id={styles.catchyPhrase}>{blog?.catchyPhrase}</p>
      <ul>
        <li>{blog?.writerName}</li>
      </ul>
      <div className={styles.content}>
        <p>{blog?.introductoryText}</p>
        {blog?.img[0] && <img src={blog.img[0]} alt="Imagem do blog" />}
        <p>{blog?.complementTitle}</p>
        <p>{blog?.developmentText}</p>
        <p>{blog?.conclusion}</p>
      </div>
    </div>
  )
}