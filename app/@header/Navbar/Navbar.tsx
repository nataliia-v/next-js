'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

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
        Navbar
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