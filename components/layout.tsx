import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className='bg-beige'>
      <main className='bg-beige'>{children}</main>
      <Footer />
    </div>
  )
}