import Link from 'next/link'
import React from 'react'
import style from './index.module.scss'
import Image from 'next/image'
export default function Card() {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
      <Image src='/p1.jpeg' alt='' fill className={style.image}/>
      </div>
      <div className={style.textContainer}>
        <div className={style.detail}>
          <span className={style.date}>12.15.2024 -</span>
          <span className={style.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet alim consectetur adipisicing elit</h1>
        </Link>
        <p className={style.desc}>
        Lorem ipsum dolor sit, amet:consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            Laudantiumrepellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
        </p>
        <Link href="/" className={style.link}>Read More</Link>
      </div>
    </div>
  )
}
