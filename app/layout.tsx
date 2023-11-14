import Header from "./@header/page";
import Footer from "./@footer/page";

import type { Metadata } from 'next';

import './globals.css';
 
export const metadata: Metadata = {
  applicationName: 'Next demo',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  creator: 'Nataliia Kolomiitseva',
  publisher: 'Nataliia Kolomiitseva',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


const Layout = (props: {
  children?: React.ReactNode
}) => (
  <html lang="en">
    <head />
    <body>
    <Header/>
      <main>
        { props?.children }
      </main>
    <Footer/>
  </body>
  </html>
)

export default Layout;
