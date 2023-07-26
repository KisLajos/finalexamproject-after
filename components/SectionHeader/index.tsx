import React from 'react'
import WalnutLeaf from '../WalnutLeaf'
import styles from './styles.module.scss'
import localFont from 'next/font/local';
 
// Font files can be colocated inside of `app`
const BuenardFont = localFont({
  src: '../../app/fonts/Buenard-Regular.ttf',
  display: 'swap',
});
export interface SectionHeaderProps {
    headertext: string
}

export default function SectionHeader({headertext}:SectionHeaderProps) {
  return (
    <div className={styles.header}>
        <WalnutLeaf colour='garnet' width={40} height={40}/>
        <h1 className={BuenardFont.className}>{headertext}</h1>
      </div>
  )
}
