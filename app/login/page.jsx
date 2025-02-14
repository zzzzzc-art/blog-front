import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import CardList from '@/components/cardlist'
import Menu from '@/components/menu'
export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}
