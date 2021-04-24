import Header from './header';
import Footer from './footer';
import { Name } from '../pages/[artist]';

interface LayoutProps {
  fullName?: string,
  home?: Boolean,
  children?: React.ReactNode,
}

export default function Layout({ fullName, home, children }: LayoutProps) {
  return (
    <div className='bg-beige'>
      <Header fullName={fullName} home={home} />
      <main className='bg-beige'>{children}</main>
      <Footer />
    </div>
  )
}