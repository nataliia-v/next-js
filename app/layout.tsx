import Header from "./@header/page";
import Footer from "./@footer/page";

import './globals.css'


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
