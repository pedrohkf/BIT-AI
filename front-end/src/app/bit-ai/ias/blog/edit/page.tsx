'use client'
import { useBlogContext } from '@/context/BlogContext';
import styles from "./edit.module.css"
import Button from '@/app/Components/forms/button';
import { FormEvent, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from "next/navigation"

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Criando...</Button>
      ) : (
        <Button>Criar</Button>
      )}
    </>
  );
}

export default function Page() {
  const { posts } = useBlogContext();
  const [imgLink, setImgLink] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/bit-ai/ias/blog');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p>{posts}</p>

      <p>Titulo</p>
      <textarea name="title" />

      <p>Frase de efeito</p>
      <textarea name="catchyPhrase" />

      <p>Introduçao</p>
      <textarea name="introductory" />

      <p>Desenvolvimento</p>
      <textarea name="development" />

      <p>SubTitulo</p>
      <textarea name="subTitle" />

      <p>Titulo Complementar</p>
      <textarea name="complementTitle" />

      <p>Conclusao</p>
      <textarea name="conclusion" />

      <img src={imgLink} alt="Adicione uma imagem" />
      <textarea name="imgLink" placeholder='URL' onChange={(e) => setImgLink(e.target.value)} />

      <FormButton />
    </form>

  )
}
