import React from 'react'
import ReviewSlider from './ReviewSlider'
import { getReviews } from '@/utils/wordpressfunctions';
import SectionHeader from '../SectionHeader';
import styles from './styles.module.scss'

export default async function Reviews() {
  const reviews = await getReviews();

  return (
    <section>
      <SectionHeader headertext="Visszajelzések"/>
      <ReviewSlider reviews={reviews} />
    </section>
  )
}
