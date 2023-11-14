import Head from "next/head";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us',
  description: 'Our product',
}

const AboutUs = () => {
  return (
    <div>
      <Head><title>Home</title></Head>
      <h2>
        About us
      </h2>
    </div>
    
  )
}

export default AboutUs;