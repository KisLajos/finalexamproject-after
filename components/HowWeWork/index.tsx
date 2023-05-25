import React from 'react'
import PageCard from '../PageCard'
import styles from './styles.module.scss'
import WalnutLeaf from '../WalnutLeaf'

export default function HowWeWork() {
  return (
    <div className={styles.HowWeWorkContainer}>
      <div className={styles.HowWeWorkContainerHeader}>
        <WalnutLeaf colour='logocolours' width={50} height={50}/>
        <h1>Így dolgozunk</h1>
      </div>
      <div className={styles.HowWeWorkCardsContainer}>
        <PageCard type="howwework" title="Vibe" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
        <PageCard type="howwework" title="Tervezés" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
        <PageCard type="howwework" title="Véglegesítés" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
        <PageCard type="howwework" title="A Nagy Nap" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
      </div>
    </div>
  )
}
