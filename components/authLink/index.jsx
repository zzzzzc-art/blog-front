'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import style from './index.module.scss'
export default function AuthLink() {
  const [open,setOpen]=useState(false)
  const status="nologin"
  return (
    <>
    {
      status==="nologin"?<Link href="/login">Login</Link>:
      <div>
        <Link href="/write">write</Link>
        <span className={style.link}>loginOut</span>
        </div>
    }
    <div className={style.burger} onClick={()=>{
      setOpen(!open)
    }}>
      <div className={style.line}></div>
      <div className={style.line}></div>
      <div className={style.line}></div>
    </div>
    {
      open&&<div className={style.menu}>
        <Link href="/" >Homepage</Link>
        <Link href="/" >Contract</Link>
        <Link href="/" >About</Link>
        {status==="nologin"?<Link href="/login">Login</Link>:
      <div>
        <Link href="/write">write</Link>
        <span className={style.link}>loginOut</span>
        </div>
            }
      </div>
    }
    </>
    
  )
}
