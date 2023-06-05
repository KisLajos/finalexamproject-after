import React from 'react'
import WalnutLeaf from '../WalnutLeaf'
import parse from 'html-react-parser'
import styles from './styles.module.scss'
import localFont from 'next/font/local';
 
// Font files can be colocated inside of `app`
const BuenardFont = localFont({
  src: '../../app/fonts/Buenard-Regular.ttf',
  display: 'swap',
});

export interface NonHomeHeaderProps {
    content: string
}

export default function NonHomeHeader({content}: NonHomeHeaderProps) {
  return (
    <div className={styles.headerContainer}>
        <WalnutLeaf colour="logocolours" width={40} height={40} />
        <h1 className={BuenardFont.className}>{parse(content)}</h1>
    </div>
  )
}
