import Header from "./@header/page";
import Footer from "./@footer/page";

const Layout = (props: {
  children?: React.ReactNode
}) => (
  <>
  <Header/>
  { props?.children }
  <Footer/>
  </>
)

export default Layout;
