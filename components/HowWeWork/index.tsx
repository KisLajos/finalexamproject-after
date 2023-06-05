import React from 'react'
import PageCard from '../PageCard'
import SectionHeader from '../SectionHeader'
import styles from './styles.module.scss'
import Image from 'next/image'

export default function HowWeWork() {
  return (
    <section className={styles.HowWeWorkContainer}>
      <SectionHeader headertext="Így dolgozunk"/>
      <div className={styles.HowWeWorkCardsContainer}>
        <Image className={styles.dandelions_vibe} src={"/dandelions_vibe.png"} alt="Vibe" width={229} height={334}/>
        <Image className={styles.dandelions_tervezes} src={"/dandelions_tervezes.png"} alt="Tervezés" width={336} height={228}/>
        <Image className={styles.dandelions_veglegesites} src={"/dandelions_veglegesites.png"} alt="Véglegesítés" width={343} height={555}/>
        <Image className={styles.dandelions_anagynap} src={"/dandelions_anagynap.png"} alt="A Nagy Nap" width={336} height={339}/>
        <PageCard type="howwework" title="Vibe" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
        <PageCard type="howwework" title="Tervezés" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
        <PageCard type="howwework" title="Véglegesítés" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
        <PageCard type="howwework" title="A Nagy Nap" links={[""]} bodytext={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dicta perspiciatis ipsam possimus harum. Quos, provident inventore facilis eaque hic perferendis necessitatibus accusamus perspiciatis nemo, ipsam asperiores beatae omnis dolore."}/>
      </div>
    </section>
  )
}
