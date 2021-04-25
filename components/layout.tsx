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
    <div className='flex flex-col justify-between bg-gray-700'>
      <div>
        <Header fullName={fullName} home={home} />
        <main className='bg-gray-700'>{children}</main>
      </div>
      <Footer />
    </div>
  )
}