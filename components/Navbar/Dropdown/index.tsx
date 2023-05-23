import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Category, WPTermObject } from '..';
import styles from './styles.module.scss';
import navlinkstyles from '../Navlink/styles.module.scss'
import navbarstyles from '../styles.module.scss';
import WalnutLeaf from '@/components/WalnutLeaf';

export interface Sublink {
    href: string;
    title: string
}

export interface DropdownProps {
    children?: React.ReactNode
    //key: string;
    categorychildren: WPTermObject[];
    parentname: string
}

export const DropdownMenu = ({categorychildren, parentname} : DropdownProps) => {
    return (
        <ul className={navbarstyles.dropdown_content}>
                {categorychildren.map((categorychild) => (
                    <div className={styles.dropdowncontentContainer}>
                        <li key={categorychild.term_id} className={`${navlinkstyles.nav_link} ${navbarstyles.nav_link__child}`}>
                            <WalnutLeaf colour="lavender" width={20} height={20}/>
                            <Link href={`/${parentname}/${categorychild.slug}`}>{categorychild.name}</Link>
                        </li>
                    </div>
                ))}
        </ul>
    )
}

