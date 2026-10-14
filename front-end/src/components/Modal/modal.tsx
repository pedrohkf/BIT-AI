"use client";

import { useState } from "react";
import styles from "./modal.module.css";

import Form from "./form";

export default function Page({ ownerId }: { ownerId: string }) {
    const [isOpen, setIsOpen] = useState(true);

    function handleClose() {
        setIsOpen(false);
    }

    return (
        isOpen ? (
            <div className={styles.container}>
                <div className={styles.modal}>
                    <h2>Receba as melhores noticias por email</h2>
                    <Form onClose={handleClose} ownerId={ownerId} />
                </div>
            </div >
        ) : (
            <>
            </>
        )
    );
}