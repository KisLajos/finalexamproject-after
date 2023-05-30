import React from 'react'
import WalnutLeaf from '../WalnutLeaf'
import parse from 'html-react-parser'
import styles from './styles.module.scss'

export interface NonHomeHeaderProps {
    content: string
}

export default function NonHomeHeader({content}: NonHomeHeaderProps) {
  return (
    <div className={styles.headerContainer}>
        <WalnutLeaf colour="logocolours" width={40} height={40} />
        <h1>{parse(content)}</h1>
    </div>
  )
}
