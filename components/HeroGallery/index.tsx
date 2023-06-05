'use client'
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Image } from "../FeaturedGallery";
import styles from './styles.module.scss'

export interface HeroGalleryProps {
  images: Image[]
  interval: number;
}

const HeroGallery = ({ images, interval = 5000 } : HeroGalleryProps) => {
    //const [images, setImages] = useState<Image[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevReview = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
      const timer = setInterval(() => {
        nextReview();
      }, interval);
  
      return () => {
        clearInterval(timer);
      };
    }, [images.length, interval]);

    if (images.length === 0) {
      return <div>Loading images...</div>;
    }

    return (
      <section className={styles.hero_gallery}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            className={styles.hero_image_container}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <img
              /* layoutId="img" */
              src={images[currentIndex].url!}
              alt="Diólevél"
              /* initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }} */
            />
          </motion.div>
        </AnimatePresence>
      </section>
    );
}

export default HeroGallery;