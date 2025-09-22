import { Ebook } from '@/actions/ebook-get'
import styles from "./ebook-List.module.css"
import React from 'react'

type Props = {
    ebooks: Ebook[];
};

export default function EbookList({ ebooks }: Props) {
    if (ebooks.length === 0) {
        return (
            <div>
                <p>Você não tem nenhum ebook criado. </p>
            </div>
        )
    }

    return (
        <div className={styles.ebooks}>
            {ebooks.map((ebook) => (
                <a key={ebook._id} href={'../../ebooksPublic/' + ebook._id}>
                    <div className={styles.ebookCard}>
                        <div className={styles.description}>
                            <h3>{ebook.title}</h3>
                            <p>{new Date(ebook.createdAt).toLocaleDateString('pt-BR')}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}
