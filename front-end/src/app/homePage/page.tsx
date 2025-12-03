'use client'
import React from 'react'
import styles from "./HomePage.module.css"
import { Menu } from '@/components/menu/Menu'
import Image from 'next/image'

import background from "../../public/imgs/background.png"
import logoBlack from "../../public/imgs/logo-black.png"

export default function HomePage() {
    return (
        <div className={styles.content}>
            <Menu />
            <div className={styles.container}>
                <div className={styles.presentation}>
                    <div className={styles.background}>
                        <Image src={background} alt="background" width={2000} height={2000} />
                        Seu navegador não suporta vídeo em background.
                    </div>
                    <div>
                        <div className={styles.title}>
                            <Image src={logoBlack} alt="" width={100} height={200} />
                            <h1>Automatizando o seu futuro</h1>
                            <h2>
                                Crie campanhas, sites e funis automatizados com rapidez, economia e eficiência.
                            </h2>
                            <a href="/auth"><button>QUERO CRIAR</button></a>
                        </div>
                    </div>
                </div>
                <div className={styles.homebrew}>

                </div>
            </div>
        </div >
    )
}
