import React from 'react'
import SideMenu from '../../Components/Menu/SideMenu'
import styles from "./dashboard.module.css"
import AccountInfo from '@/app/Components/Account/Account-Info'

export default function page() {
  return (
    <div className={styles.content}>
      <SideMenu />
      <h1>Deshboard</h1>
      <AccountInfo />
    </div>
  )
}
