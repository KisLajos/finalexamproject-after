import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'

export interface InfoRibbonBoxProps {
    icon: IconDefinition,
    textContent: string
}

export interface InfoRibbonProps {
    infoRibbonBoxes: InfoRibbonBoxProps[]
}

export default function InfoRibbon({infoRibbonBoxes} : InfoRibbonProps) {
  return (
    <section className={styles.infoRibbonContainer}>
        {
        infoRibbonBoxes.map((infoRibbonBox: InfoRibbonBoxProps, index) => (
            <div key={"box_" + index} className={styles.infoRibbonBox}>
                <FontAwesomeIcon style={{width:"2rem"}} icon={infoRibbonBox.icon}/> {infoRibbonBox.textContent}
            </div>
        ))}
    </section>
  )
}
