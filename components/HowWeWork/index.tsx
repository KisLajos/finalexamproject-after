import React from 'react'
import PageCard from '../PageCard'
import SectionHeader from '../SectionHeader'
import styles from './styles.module.scss'

export default function HowWeWork() {
  return (
    <div className={styles.HowWeWorkContainer}>
      <SectionHeader headertext="Így dolgozunk"/>
      <div className={styles.HowWeWorkCardsContainer}>
        <PageCard type="howwework" title="Vibe" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
        <PageCard type="howwework" title="Tervezés" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
        <PageCard type="howwework" title="Véglegesítés" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
        <PageCard type="howwework" title="A Nagy Nap" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
      </div>
    </div>
  )
}
