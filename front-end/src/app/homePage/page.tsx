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
                    <video
                        className={styles.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/videos/video.webm" type="video/webm" />
                        Seu navegador não suporta vídeo em background.
                    </video>
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
