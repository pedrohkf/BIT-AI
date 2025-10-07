import AddBlog from '@/app/Components/Blog/addBlog-form'
import React from 'react'

import styles from "./addBlog.module.css";
import SideMenu from '@/app/Components/Menu/SideMenu';

export default function addBlog() {
  return (
    <div className={styles.container}>
      <SideMenu />
      Tema IA
      <AddBlog />
    </div>
  )
}
