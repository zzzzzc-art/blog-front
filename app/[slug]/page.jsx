import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import CardList from '@/components/cardlist'
import Menu from '@/components/menu'
import Comments from '@/components/comments'
export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>  
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit, amet:consectetur adipisicing elit.
              Cupiditate, quam nisi magni ea laborum inventore voluptatum
              Laudantiumrepellat ducimus unde aspernatur fuga. Quo, accusantium
              quisquam! Harum unde sit culpa debitis.
            </p>
            <h2>
              Lorem ipsum dolor sit, amet
            </h2>
            <p>
              Lorem ipsum dolor sit, amet:consectetur adipisicing elit.
              Cupiditate, quam nisi magni ea laborum inventore voluptatum
              Laudantiumrepellat ducimus unde aspernatur fuga. Quo, accusantium
              quisquam! Harum unde sit culpa debitis.
            </p>
            <p>
              Lorem ipsum dolor sit, amet:consectetur adipisicing elit.
              Cupiditate, quam nisi magni ea laborum inventore voluptatum
              Laudantiumrepellat ducimus unde aspernatur fuga. Quo, accusantium
              quisquam! Harum unde sit culpa debitis.
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu /> 
      </div>
    </div>
  )
}
