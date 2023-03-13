import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  redirect("/home")
  return (
    <></>
  )
}
