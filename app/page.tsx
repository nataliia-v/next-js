import Image from 'next/image';

import styles from './page.module.css';


const Home = () => <div className={styles.homePage}><Image width={500} height={500} src="./homeImage.svg" alt="home image"/></div>

export default Home;
