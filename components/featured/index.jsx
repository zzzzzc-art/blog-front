import React from 'react'
import style from './index.module.scss'
import Image from 'next/image'
export default function Featured() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <b>Hey,Iama dev here</b> Discover my stories and create ideas
      </h1>
      <div className={style.post}>
        <div className={style.imgContainer}>
          <Image src='/p1.jpeg' fill className={style.image}/>
        </div>
        <div className={style.textContainer}>
            <h1 className={style.postTitle}>orem ipsum dolor sit amet alim consectetur adipisicing elit</h1>
            <p className={style.postDesc}>
            Lorem ipsum dolor sit, amet:consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            Laudantiumrepellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
            </p>
            <button className={style.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
