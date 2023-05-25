import React from 'react'
import ReviewSlider from './ReviewSlider'
import { getReviews } from '@/utils/wordpressfunctions';
import styles from './styles.module.scss'
import SectionHeader from '../SectionHeader';

export default async function Reviews() {
  const reviews = await getReviews();

  return (
    <div>
      <SectionHeader headertext="Visszajelzések"/>
      <ReviewSlider reviews={reviews} />
    </div>
  )
}
