import React from 'react'
import styles from "./HomePage.module.css"
import { Menu } from '../Components/Menu/Menu'

export default function HomePage() {
    return (
        <div className={styles.content}>
            <Menu />
            <div className={styles.container}>
                <div className={styles.presentation}>
                    <div>
                        <div className={styles.title}>
                            <h1>BIT-AI: Automatizando o seu futuro</h1>
                            <h2>
                                Simples, rápido e acessível. A automação do futuro começa agora.
                            </h2>
                            <p>
                                Bit-IA simplifica o que era caro e complicado: crie campanhas,
                                sites e funis automatizados com rapidez, economia e eficiência. O
                                futuro ao seu alcance!
                            </p>
                            <a href="/auth"><button>CRIAR</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
