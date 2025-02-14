import React from 'react'
import style from './index.module.scss'
import Image from 'next/image'
export default function Pagination() {
  return (
    <div className={style.container}>
      <button className={style.button}>Previous</button>
      <button className={style.button}>Next</button>
    </div>
  )
}
