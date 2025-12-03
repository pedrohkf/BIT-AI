'use client'
import React from 'react'
import styles from "./HomePage.module.css"
import { Menu } from '../Components/Menu/Menu'

export default function HomePage() {
    return (
        <div className={styles.content}>
            <Menu />
            <div className={styles.container}>
                <div className={styles.presentation}>
                    <div className={styles.background}>
                        <img src="/imgs/background.png" alt="background" />
                        Seu navegador não suporta vídeo em background.
                    </div>
                    <div>
                        <div className={styles.title}>
                            <img src="/imgs/logo-black.png" alt="" />
                            <h1>Automatizando o seu futuro</h1>
                            <h2>
                                Crie campanhas, sites e funis automatizados com rapidez, economia e eficiência.
                            </h2>
                            <a href="/auth"><button>QUERO CRIAR</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
