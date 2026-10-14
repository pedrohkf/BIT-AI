"use client"
import React from 'react'
import DeleteIcon from "@/components/Icons/Delete"
import { trashBlog } from "@/services/blogs";
import styles from "./DeleteBlogButton.module.css"

type Props = {
    blogId: string;
    onDeleted: () => void;
};

export default function DeleteBlogButton({ blogId, onDeleted }: Props) {
    function deleteBlog() {
        trashBlog(blogId);
        onDeleted();
    }

    return (
        <button onClick={deleteBlog} className={styles.button}>
            <DeleteIcon />
        </button>
    )
}
