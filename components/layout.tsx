import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className='bg-beige'>
      <main>{children}</main>
      <Footer />
    </div>
  )
}