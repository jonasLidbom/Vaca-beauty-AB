import Footer from "./footer.jsx"
import Contact from './contact.jsx';
import Products from './products.jsx';
import Intro from './intro.jsx';
import Header from './header.jsx';

export const siteTitle = 'Vaca Beauty AB';

export default function Layout() {

  return (
    <div>
      <Header/>
      <Intro/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}
