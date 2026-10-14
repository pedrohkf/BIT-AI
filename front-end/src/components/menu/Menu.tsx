import React from 'react'
import Link from 'next/link'
import styles from "./Menu.module.css"
import logo from "@/public/icons/bit-logo.png"
import Image from 'next/image'

export const Menu = () => {
  return (
    <header className={styles.menu}>
      <div className={styles.logo}>
        <Image src={logo} alt='BIT.AI' />
        <span>BIT.AI</span>
      </div>
      <div className={styles.buttons}>
        <Link href="/auth" className={styles.login}>Entrar</Link>
        <Link href="/auth" className={styles.start}>Começar</Link>
      </div>
    </header>
  )
}
