import React from 'react'
import style from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
export default function CateGoryList() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Popular Categories</h1>
      <div className={style.categories}>
        
          <Link 
            href="/blog"
            className={`${style.category} ${style.style}`}
            >
            <Image src='/style.png' 
              height={32} 
              width={32} className={style.image}/>
              style
          </Link>
          <Link 
            href="/blog"
            className={`${style.category} ${style.fashion}`}
            >
            <Image src='/fashion.png' 
              height={32} 
              width={32} className={style.image}/>
              fashion
          </Link>
          <Link 
            href="/blog"
            className={`${style.category} ${style.food}`}
            >
            <Image src='/food.png' 
              height={32} 
              width={32} className={style.image}/>
              food
          </Link>
          <Link 
            href="/blog"
            className={`${style.category} ${style.travel}`}
            >
            <Image src='/travel.png' 
              height={32} 
              width={32} className={style.image}/>
              travel
          </Link>
          <Link 
            href="/blog"
            className={`${style.category} ${style.culture}`}
            >
            <Image src='/culture.png' 
              height={32} 
              width={32} className={style.image}/>
              culture
          </Link>
          <Link 
            href="/blog"
            className={`${style.category} ${style.coding}`}
            >
            <Image src='/coding.png' 
              height={32} 
              width={32} className={style.image}/>
              coding
          </Link>
        
      </div>
    </div>
  )
}
