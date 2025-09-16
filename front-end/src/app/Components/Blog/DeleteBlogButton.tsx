"use client"
import axios from 'axios';
import React from 'react'
import DeleteIcon from "@/app/Components/Icons/Delete"
import styles from "./DeleteBlogButton.module.css"

type Props = {
    blogId: string;
};

export default function DeleteBlogButton({ blogId }: Props) {
    async function deleteBlog() {
        try {
            await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${blogId}`);
            alert("Blog enviado para lixeira");
        } catch (error) {
            console.error(error);
            alert(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${blogId}`)
            alert("Erro ao deltar o blog")
        }
    }

    return (
        <button onClick={deleteBlog} className={styles.button}>
            <DeleteIcon />
        </button>
    )
}
