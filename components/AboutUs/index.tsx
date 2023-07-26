import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { getPageDataBySlug } from '@/utils/wordpressfunctions'
import NonHomeHeader from '../NonhomeHeader'
import styles from './styles.module.scss'

export interface AboutUsProps {
  useAlign: boolean
}

export default async function AboutUs( {useAlign} : AboutUsProps ) {
const page = await getPageDataBySlug("rolunk")

  return (
    <section className={styles.AboutUsSection}>
      {useAlign ? 
        <div style={{ alignSelf:"start"}}><NonHomeHeader content={page.title.rendered} /></div> : 
        <div><NonHomeHeader content={page.title.rendered} /></div>
      }
      
      <div className={styles.aboutusContainer}>
          <Image src={page.acf.about_us_image.url} alt="Flóra & Balázs" width={page.acf.about_us_image.width} height={page.acf.about_us_image.height}/>
          <div className={styles.aboutusText}>
              <p>
                  {parse(page.acf.text_block_1)}
              </p>
              <p>
                  {parse(page.acf.text_block_2)}
              </p>
          </div>
      </div>
    </section>
  )
}
