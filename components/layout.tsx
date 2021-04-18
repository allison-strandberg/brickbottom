import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className='bg-beige'>
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}