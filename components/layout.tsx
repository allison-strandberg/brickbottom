import { useState, useContext } from 'react'; 
import { slide as BurgerMenu } from 'react-burger-menu'
import Header from './header';
import Footer from './footer';

interface LayoutProps {
  fullName?: string,
  home?: Boolean,
  children?: React.ReactNode,
}

export default function Layout({ fullName, home, children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const menuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    },
  };

  return (
    <div className='flex flex-col justify-between bg-gray-700'>
      <div>
        <Header fullName={fullName} home={home} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <BurgerMenu
          right
          styles={menuStyles}
          isOpen={menuOpen}
          onStateChange={(state) => handleStateChange(state)}
        >
          <a>test</a>
        </BurgerMenu>
        <main className='bg-gray-700'>{children}</main>
      </div>
      <Footer />
    </div>
  )
}