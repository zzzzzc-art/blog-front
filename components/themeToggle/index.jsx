import React, { useContext } from 'react'
import style from './index.module.scss'
import Image from 'next/image'
import ThemeContext from '@/context/ThemeContext'
export default function ThemeToggle() {
  // const {theme}=useContext(ThemeContext)
  return (
    <div className={style.container}>
        <Image src="/moon.png" alt="Twitter" width={14} height={14} />
        <div className={style.ball}></div>
        <Image src="/sun.png" alt="Twitter" width={14} height={14} />
    </div>
  )
}
