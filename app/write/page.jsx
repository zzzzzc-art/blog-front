'use client'
import React, { useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
export default function LoginPage() {
  const [open,setOpen]=useState(false);
  const [value,setValue]=useState('');
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>{setOpen(!open)}}>
          <Image src="/coding.png" alt="" width={16} height={16} />
        </button>
        {open &&(
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/culture.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/fashion.png" alt=""width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/food.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        {/* <ReactQuill theme="bubble" value={value} className={styles.textArea}
        onChange={setValue} placeholder="Tell your story..."/> */}
      </div>
      <button className={styles.publish}>
        Publish
      </button>
    </div>
  )
}
