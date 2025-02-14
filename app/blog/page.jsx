import React from 'react'
import style from './index.module.scss'
import Image from 'next/image'
import CardList from '@/components/cardlist'
import Menu from '@/components/menu'
export default function BlogPage() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Style Blog</h1>
      <div className={style.content}>
        <CardList/>
        <Menu/>
      </div>
      
    </div>
  )
}
