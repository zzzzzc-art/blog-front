import React from 'react'
import style from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.logo}>
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className={style.logoText}>Lamablog</h1>
        </div>
        <p className={style.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
        necessitatibus similique aspernatur obcaecati veritatis. AperiamCUM
        porro sequi,totam minima consequuntur, aspernatur deleniti vero
        repellendus dorales.
        </p>
        <div className={style.icons}>
          <Image src="/facebook.png" alt="Twitter" width={18} height={18} />
          <Image src="/instagram.png" alt="Twitter" width={18} height={18} />
          <Image src="/tiktok.png" alt="Twitter" width={18} height={18} />
          <Image src="/youtube.png" alt="Twitter" width={18} height={18} />
        </div>
      </div>
      <div className={style.links}>
        <div className={style.list}>
          <span className={style.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Tiktok</Link>
          <Link href='/'>Youtube</Link>
        </div>
      </div>
     
    </div>
  )
}
