import { useState } from 'react'; 
import { slide as BurgerMenu } from 'react-burger-menu'
import Header from './header';
import Footer from './footer';
import MenuLink from './menuLink';
import { ArtistProps } from '../pages/[artist]';

interface LayoutProps {
  fullName?: string,
  home?: Boolean,
  allArtistsData?: ArtistProps[],
  children?: React.ReactNode,
}

export default function Layout({ fullName, home, allArtistsData, children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const menuStyles = {
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#2da5ce'
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
      display: 'block'
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
          itemListClassName={ "flex flex-col" }
          isOpen={menuOpen}
          onStateChange={(state) => handleStateChange(state)}
          customBurgerIcon={false}
        >
          <MenuLink href="https://brickbottom.org/exhibition/recycle-remake-reimagine/" text="Brickbottom Gallery Show" />
          <MenuLink href="https://www.youtube.com/channel/UC0D6JPA1WwWm9sss6TqoPuQ" text="Videos" />
          <MenuLink href="https://brickbottom-artists-association.square.site/" text="Shop" />
          <MenuLink href="/" text="Artists' Studio Galleries" internal />
          {allArtistsData && allArtistsData.map(({ artist, name }) => (
            <MenuLink href={`/${artist}`} text={name.full} key={artist} internal indent />
          ))}
        </BurgerMenu>
        <main className='bg-gray-700'>{children}</main>
      </div>
      <Footer />
    </div>
  )
}