import React from 'react'
import style from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle'
import AuthLink from '../authLink'
export default function Navbar() {
  return (
    <div className={style.container}>
        <div className={style.social}>
            <Image src="/facebook.png" alt="Twitter" width={24} height={24} />
            <Image src="/instagram.png" alt="Twitter" width={24} height={24} />
            <Image src="/tiktok.png" alt="Twitter" width={24} height={24} />
            <Image src="/youtube.png" alt="Twitter" width={24} height={24} />
        </div>
        <div className={style.logo}>lamablog</div>
        <div className={style.links}>
            <ThemeToggle />
            <Link href="/" className={style.link}>Homepage</Link>
            <Link href="/" className={style.link}>Contract</Link>
            <Link href="/" className={style.link}>About</Link>
            <AuthLink/>
        </div>
    </div>
  )
}
