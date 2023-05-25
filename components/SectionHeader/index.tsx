import React from 'react'
import WalnutLeaf from '../WalnutLeaf'
import styles from './styles.module.scss'

export interface SectionHeaderProps {
    headertext: string
}

export default function SectionHeader({headertext}:SectionHeaderProps) {
  return (
    <div className={styles.header}>
        <WalnutLeaf colour='logocolours' width={40} height={40}/>
        <h1>{headertext}</h1>
      </div>
  )
}
