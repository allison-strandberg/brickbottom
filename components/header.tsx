import Link from 'next/link';
import MenuButton from './menuButton';

interface HeaderProps {
  menuOpen: Boolean,
  setMenuOpen: Function,
  fullName?: string,
  home?: Boolean,
}

export default function Header({ menuOpen, setMenuOpen, fullName, home }: HeaderProps) {
  return (
    <div className="fixed z-10 flex justify-center items-center overflow-x-hidden bg-beige min-h-2rem">
      <img
        className="opacity-0 lg:opacity-100"
        src={require('../public/images/header.webp')}
        alt=""
        role="presentation"
      />
      <header className="flex justify-center lg:grid lg:grid-cols-header absolute top-0 h-full w-full backdrop-filter backdrop-blur lg:backdrop-brightness-150">
        { !home && (
          <div className="flex justify-center absolute top-0 left-0 lg:relative">
            <Link href="/">
              <a className="flex justify-center items-center w-full px-2 lg:m-2 text-base md:text-xl p-1 font-fredericka text-teal bg-white bg-opacity-50 rounded-sm transition duration-300 hover:bg-opacity-100 shadow hover:shadow-xl">
              ← Back
              </a>
            </Link>
          </div>
        )}
        <h1 className="col-start-2 flex items-center justify-center font-fredericka text-gray-700 text-center text-xl md:text-3xl">{
          fullName ? fullName : 'Brickbottom Open Studios'
        }</h1>
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
    </div>
  );
}