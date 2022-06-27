import React from 'react'
import styles from '../styles/about.module.css'
import Header from './components/header'
import Footer from './components/footer'
import Image from 'next/image'

const about = () => {
  return (
    <>
          <h1>This is about page.</h1>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} priority/>
    </>
  )
}

export default about
