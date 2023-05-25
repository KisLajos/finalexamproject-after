import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import parse from 'html-react-parser'
import { getPageDataBySlug } from '@/utils/wordpressfunctions'
import SectionHeader from '../SectionHeader'

export default async function AboutUs() {
const page = await getPageDataBySlug("rolunk")

  return (
    <div>
      <SectionHeader headertext="Rólunk"/>
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
    </div>
  )
}
