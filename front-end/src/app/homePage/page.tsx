import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./HomePage.module.css"
import { Menu } from '@/components/menu/Menu'

import background from "../../public/imgs/background.png"

const highlights = ["Blogs com IA", "Ebooks em PDF", "Captura de leads"]

export default function HomePage() {
    return (
        <div className={styles.content}>
            <Menu />
            <div className={styles.container}>
                <section className={styles.presentation}>
                    <div className={styles.background}>
                        <Image src={background} alt="" fill priority sizes="100vw" />
                    </div>
                    <div className={styles.shade} />
                    <div className={styles.grid} />

                    <div className={styles.hero}>
                        <span className={styles.badge}>
                            <i /> Inteligência artificial para criar e converter
                        </span>

                        <h1>Automatizando o seu futuro</h1>

                        <p className={styles.subtitle}>
                            Crie campanhas, sites e funis automatizados com rapidez, economia e eficiência.
                        </p>

                        <div className={styles.actions}>
                            <Link href="/auth" className={styles.cta}>QUERO CRIAR</Link>
                            <Link href="/auth" className={styles.ghost}>Já tenho conta</Link>
                        </div>

                        <ul className={styles.highlights}>
                            {highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div >
    )
}
