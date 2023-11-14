import Image from 'next/image';
import { Metadata } from 'next';

import styles from './page.module.css';
 
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}


const Home = () => (
  <div className={styles.homePage}>
    <Image width={500} height={500} src="./homeImage.svg" alt="home image"/>
  </div>
)

export default Home;
