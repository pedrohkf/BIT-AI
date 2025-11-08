"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import styles from "./edit.module.css";
import userGet from "@/actions/user-get";
import Image from "next/image";

interface Blog {
  title: string,
  subTitle: string,
  complementTitle: string,
  catchyPhrase: string,
  introductoryText: string,
  developmentText: string,
  conclusion: string,
  img: [string],
  writerName: string,
  createdAt: Date,
  deleted: boolean,
  deletedAt: string,
  userId: string,
}

interface User {
  _id: string;
  name: string;
  email: string;
}


export default function EditPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params?.blogId;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [catchyPhrase, setCatchyPhrase] = useState("");
  const [introductoryText, setIntroductoryText] = useState("");
  const [developmentText, setDevelopmentText] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [img, setImg] = useState<string[]>([]);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const userData = await userGet();
      console.log("USER ID" + user?._id)

      setUser(userData ?? null);
    }
    fetchUser();
  }, []);


  useEffect(() => {
    console.log("BLOGS ID " + blogId)
    if (!blogId) return;

    async function fetchBlog() {
      const res = await fetch(`https://bit-ai-orcin.vercel.app/blogs/get/${blogId}`);
      const data = await res.json();

      console.log("Pizzaria carregada do backend:", data);

      setBlog(data);
      setTitle(data.title);
      setSubTitle(data.subTitle);
      setCatchyPhrase(data.catchyPhrase);
      setIntroductoryText(data.introductoryText);
      setDevelopmentText(data.developmentText);
      setConclusion(data.conclusion);
      setImg(data.img || []);

    }
    fetchBlog();
  }, [blogId]);

  async function handleSave() {
    if (!blog) return;

    if (!title.trim()) {
      alert("O título não pode estar vazio!");
      return;
    }

    if (!catchyPhrase.trim()) {
      alert("A frase de impacto é obrigatória!");
      return;
    }

    if (!introductoryText.trim() || !developmentText.trim() || !conclusion.trim()) {
      alert("O artigo precisa ter pelo menos um texto preenchido!");
      return;
    }

    if (img.length === 0 || !img[0].trim()) {
      alert("Adicione pelo menos uma imagem de capa!");
      return;
    }

    const updated = {
      title,
      subTitle,
      catchyPhrase,
      introductoryText,
      developmentText,
      conclusion,
      img,
    };


    try {
      const res = await fetch(`https://bit-ai-orcin.vercel.app/blogs/update/${blogId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      if (res.ok) {
        alert("blog atualizada com sucesso!");
        router.refresh();
      } else {
        const errText = await res.text();
        console.error("Erro no backend:", errText);
        alert("Erro ao salvar. Verifique o console.");
      }
    } catch (err) {
      console.error("Erro ao atualizar blog:", err);
      alert("Erro de conexão ao salvar.");
    }
  }

  return (
    <div className={styles.editorPage}>
      <section className={styles.formSection}>
        <h2>Editar blog</h2>

        <label>Título</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Subtítulo</label>
        <input value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />

        <label>Frase de impacto</label>
        <input value={catchyPhrase} onChange={(e) => setCatchyPhrase(e.target.value)} />

        <label>Introdução</label>
        <textarea value={introductoryText} onChange={(e) => setIntroductoryText(e.target.value)} />

        <label>Desenvolvimento</label>
        <textarea value={developmentText} onChange={(e) => setDevelopmentText(e.target.value)} />

        <label>Conclusão</label>
        <textarea value={conclusion} onChange={(e) => setConclusion(e.target.value)} />

        <label>Imagens (URLs separadas por vírgula)</label>
        <input
          value={img.join(", ")}
          onChange={(e) => setImg(e.target.value.split(",").map((s) => s.trim()))}
        />

        <button onClick={handleSave} className={styles.saveBtn}>
          Salvar alterações
        </button>
      </section>
      <section className={styles.previewSection}>
        {/* CABEÇALHO DO POST */}
        <header className={styles.header}>
          <div className={styles.blogHeader}>
            <h1>{title || "Título do Post"}</h1>
            {subTitle && <h2 className={styles.subTitle}>{subTitle}</h2>}
            <p className={styles.authorInfo}>
              Por {user?.name || "Autor desconhecido"} •{" "}
              {blog?.createdAt
                ? new Date(blog.createdAt).toLocaleDateString("pt-BR")
                : "Data não disponível"}
            </p>
          </div>
        </header>

        {/* IMAGEM DE CAPA */}
        {img.length > 0 && (
          <div className={styles.bannerWrapper}>
            <Image src={img[0]} alt="Imagem de capa" className={styles.banner} />
          </div>
        )}

        {/* CONTEÚDO PRINCIPAL */}
        <article className={styles.blogContent}>
          <section className={styles.sectionText}>
            <h3>Introdução</h3>
            <p>{introductoryText || "Escreva aqui a introdução do seu artigo."}</p>
          </section>

          <section className={styles.sectionText}>
            <h3>Desenvolvimento</h3>
            <p>{developmentText || "Aqui vai o desenvolvimento do texto."}</p>
          </section>

          <section className={styles.sectionText}>
            <h3>Conclusão</h3>
            <p>{conclusion || "Finalização do seu artigo aqui."}</p>
          </section>
        </article>

        {/* GALERIA DE IMAGENS */}
        {img.length > 1 && (
          <section id="galeria" className={styles.gallerySection}>
            <h2>Galeria</h2>
            <div className={styles.galleryGrid}>
              {img.slice(1).map((url, i) => (
                <div className={styles.galleryItem} key={i}>
                  <Image src={url} alt={`Imagem ${i}`} />
                </div>
              ))}
            </div>
          </section>
        )}
      </section>
    </div >
  );
}