import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Category, WPTermObject } from '..';
import styles from './styles.module.scss';
import navlinkstyles from '../Navlink/styles.module.scss'
import navbarstyles from '../styles.module.scss';
import WalnutLeaf_stemless from '@/components/WalnutLeaf_stemless';

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
                    <div key={categorychild.term_id} className={styles.dropdowncontentContainer}>
                        <li className={`${navlinkstyles.nav_link} ${navbarstyles.nav_link__child}`}>
                            <WalnutLeaf_stemless colour="garnet" width={20} height={20}/>
                            <Link href={`/${parentname}/${categorychild.slug}`}>{categorychild.name}</Link>
                        </li>
                    </div>
                ))}
        </ul>
    )
}

