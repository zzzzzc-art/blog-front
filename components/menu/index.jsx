import React from 'react'
import style from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
export default function Menu() {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>{"what's hot"}</h2>
      <h1 className={style.title}>Most Popular</h1>
      <div className={style.items}>
        <Link href="/" className={style.item}>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.travel}`}>
              travel
            </span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>12.15.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.culture}`}>
              Culture
            </span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>12.15.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.food}`}>
              Food
            </span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>12.15.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.fashion}`}>
              Fashion
            </span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>12.15.2024</span>
            </div>
          </div>
        </Link>
      </div>
      <h2 className={style.subtitle}>Discover by topic</h2>
      <h1 className={style.title}>Categories</h1>
      <div className={style.categoryList}>
        <Link href="/" className={`${style.categoryItem} ${style.style}`}>
          Style
        </Link>
        <Link href="/" className={`${style.categoryItem} ${style.travel}`}>
          Travel
        </Link>
        <Link href="/" className={`${style.categoryItem} ${style.food}`}>
          Food
        </Link>
        <Link href="/" className={`${style.categoryItem} ${style.fashion}`}>
          Fashion
        </Link>
        <Link href="/" className={`${style.categoryItem} ${style.culture}`}>
          Culture
        </Link>
        <Link href="/" className={`${style.categoryItem} ${style.coding}`}>
          Coding
        </Link>
      </div>
      <h2 className={style.subtitle}>Chosen by the editor</h2>
      <h1 className={style.title}>Editor Pick</h1>
      <div className={style.items}>
        <Link href="/" className={style.item}>
          <div className={style.imgContainer}>
            <Image src='/p1.jpeg' alt='' fill className={style.image}/>
          </div>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.travel}`}>
              travel
            </span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>12.15.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imgContainer}>
            <Image src='/p1.jpeg' alt='' fill className={style.image}/>
          </div>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.culture}`}>
              Culture
            </span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>12.15.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imgContainer}>
            <Image src='/p1.jpeg' alt='' fill className={style.image}/>
          </div>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.food}`}>
              Food
            </span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>12.15.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imgContainer}>
            <Image src='/p1.jpeg' alt='' fill className={style.image}/>
          </div>
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.fashion}`}>
              Fashion
            </span>
            <h3 className={style.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit</h3>
            <div className={style.detail}>
              <span className={style.username}>John Doe</span>
              <span className={style.date}>12.15.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
