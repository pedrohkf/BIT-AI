"use client"
import axios from 'axios';
import React from 'react'
import { useRouter } from "next/navigation";
import DeleteIcon from "@/components/Icons/Delete"
import styles from "./DeleteBlogButton.module.css"

type Props = {
    blogId: string;
};

export default function DeleteBlogButton({ blogId }: Props) {
    const router = useRouter();

    async function deleteBlog() {
        try {
            await axios.patch(`https://bit-ai-orcin.vercel.app/blogs/${blogId}`);
            router.refresh()
        } catch (error) {
            console.error(error);
            alert(`https://bit-ai-orcin.vercel.app/blogs/${blogId}`)
            alert("Erro ao deltar o blog")
        }
    }

    return (
        <button onClick={deleteBlog} className={styles.button}>
            <DeleteIcon />
        </button>
    )
}
