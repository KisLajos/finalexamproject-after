import Image from 'next/image'
import HeroGallery from '@/components/HeroGallery'
import MainPageCards from '@/components/MainPageCards'
import HowWeWork from '@/components/HowWeWork'
import Reviews from '@/components/Reviews'
import AboutUs from '@/components/AboutUs'
import InfoRibbon from '@/components/InfoRibbon'
import SectionHeader from '@/components/SectionHeader'
import { getHeroImages } from '@/utils/wordpressfunctions'
import { faPenNib, faCreditCard, faBoxOpen, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styles from './page.module.scss'

export default async function Home() {
  const imagesRes = await getHeroImages();
  const images = imagesRes[0].acf

  const imagesToSet = []
  imagesToSet.push(images.hero_image_1)
  imagesToSet.push(images.hero_image_2)
  imagesToSet.push(images.hero_image_3)

  //console.log(imagesToSet)
  const infoRibbonBoxes = [
    {
      icon: faPenNib,
      textContent: "Egyedi design, kiváló minőség"
    },
    {
      icon: faCreditCard,
      textContent: "Biztonságos fizetés bankkártyával"
    },
    {
      icon: faBoxOpen,
      textContent: "Ingyenes csomagküldés 30 000 Ft felett"
    },
    {
      icon: faPaperPlane,
      textContent: "Gyors kézbesítés országszerte"
    },
  ]

  return (
    <main className={styles.main}>
      <HeroGallery images={imagesToSet} interval={5000} />
      <MainPageCards />
      <HowWeWork />
      <InfoRibbon infoRibbonBoxes={infoRibbonBoxes}/>
      <SectionHeader headertext='Munkáink'/>
      <div className={styles.ourWorksImageContainer}>
        <Image src='/munkaink.png' alt='munkaink' width={900} height={900}/>
      </div>
      {/* @ts-expect-error Server Component */}
      <Reviews />
      {/* @ts-expect-error Server Component */}
      <AboutUs />
    </main>
  )
}