import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Category } from '..'
import Navlink from '../Navlink'
import navbarstyles from '../styles.module.scss'
import styles from './styles.module.scss'

export interface NavlinkContainerProps {
    categories: Category[]
}

export default function NavlinkContainer({categories} : NavlinkContainerProps) {
  //console.log()
  return (
    <ul className={navbarstyles.nav_links}>
        <li className={styles.navbarLogo}>
          <Link href={"/"}>
            <Image src={'/navbarlogo.svg'} alt="Diólevél Dekorműhely" width={250} height={250}/>
          </Link>
        </li>
        {categories.map((category:Category) => (
              category.acf.show_on_navbar ?
              <Navlink key={"nav-" + category.id} category={category}/>
              :
              ""
            )
          )
        }
      </ul>
  )
}
