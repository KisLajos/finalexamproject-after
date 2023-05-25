import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'
import WalnutLeaf from '../WalnutLeaf'

export interface PageCardProps {
  type: string,
  title: string,
  links: string[],
  bodytext?: string
}

export default function PageCard({title, links, bodytext}:PageCardProps) {
  
  return (
    <div>
      {links.length > 1 && 
        <div className={styles.linksCard}>
          <div className={styles.linkscardHeader}>
            <WalnutLeaf colour="logocolours" width={40} height={40}/>
            <h2>{title}</h2>
          </div>
          {
          <div className={styles.linkscardBody}>
            {links.map((link, index) =>(
                <div className={styles.linkscardlineContainer} key={"link-" + index}>
                  <WalnutLeaf colour="logocolours" width={20} height={20}/>
                  {link}
                </div>
            ))}
          </div>
          }
        </div>
      }
      
      {(bodytext && bodytext.length > 0) &&
        <div className={styles.textCard}>
          <h2>{title}</h2>
          <div>
            {bodytext}
          </div>
        </div>
      }
    </div>
  )
}
