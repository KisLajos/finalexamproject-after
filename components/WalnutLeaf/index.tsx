import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

export interface WalnutLeafProps {
    width: number,
    height: number,
    colour: string
}

export default function WalnutLeaf({width, height, colour} : WalnutLeafProps) {
  return (
    <div className={styles.walnutleafContainer}>
        <Image src={`/walnutleaf-${colour}.svg`} alt='Diólevél Dekorműhely' width={width} height={height}/>
    </div>
  )
}
