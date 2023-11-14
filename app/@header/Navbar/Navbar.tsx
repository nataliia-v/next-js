'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image'

import styles from './Navbar.module.scss';

const navigation = [
  { id: 1, title: "Home", path: "/"},
  { id: 2, title: "Users", path: "/users"},
  { id: 3, title: "About Us", path: "/aboutUs"},
]

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image width={70} height={70} src='./logo.svg' alt={'logo'} />
      </div>
      <div className={styles.links}>
        {
          navigation.map(({ id, title, path })=> (<Link className={pathname === path ? styles.active : ''} key={id} href={path}>{ title }</Link> ))
        }
      </div>
    </nav>
  )
}

export default Navbar;