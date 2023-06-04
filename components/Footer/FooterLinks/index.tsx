import { getCategories } from '@/components/Navbar'
import React from 'react'
import FooterlinkContainer from './FooterlinkContainer'
import styles from './styles.module.scss'

export default async function FooterLinks() {
  const resCategories = await getCategories()

  return (
    <div className={styles.footerLinksContainer}>
      <FooterlinkContainer categories={resCategories}/>
    </div>
  )
}
