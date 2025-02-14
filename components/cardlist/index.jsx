import React from 'react'
import style from './index.module.scss'
import Image from 'next/image'
import Pagination from '../pagination'
import Card from '../Card'
export default function CardList() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Recent Posts</h1>
      <div className={style.posts}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination/>
    </div>
  )
}
