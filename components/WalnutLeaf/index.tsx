import Image from 'next/image'
import React from 'react'

export interface WalnutLeafProps {
    width: number,
    height: number
}

export default function WalnutLeaf({width, height} : WalnutLeafProps) {
  return (
    <div>
        <Image src={"/walnutleaf.svg"} alt='Diólevél Dekorműhely' width={width} height={height}/>
    </div>
  )
}
