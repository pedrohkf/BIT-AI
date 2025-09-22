import React from 'react'
import { ButtonRedirectPage } from '../Buttons/ButtonRedirectPage'
import styles from "./Menu.module.css"
import logo from "../../../../public/imgs/logo-black.png"
import Image from 'next/image'

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <Image src={logo} alt='logo' />
      </div>
      <div className={styles.buttons}>
        <ButtonRedirectPage pageRedirect="/auth">Entrar</ButtonRedirectPage>
        <ButtonRedirectPage pageRedirect="/auth">Começar</ButtonRedirectPage>
      </div>
    </div>
  )
}
