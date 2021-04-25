import Link from 'next/link';

interface HeaderProps {
  fullName?: string,
  home?: Boolean,
}

export default function Header({ fullName, home }: HeaderProps) {
  return (
    <div className="fixed z-10 flex justify-center overflow-x-hidden bg-beige min-h-2rem">
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
              <a className="no-underline px-2 lg:m-2 text-base md:text-xl p-1 font-fredericka border-2 border-teal rounded-sm transition duration-300 hover:bg-white hover:bg-opacity-50">
              ← Back
              </a>
            </Link>
          </div>
        )}
        <h1 className="col-start-2 flex items-center justify-center font-fredericka text-gray-700 text-center text-xl md:text-3xl">{
          fullName ? fullName : 'Brickbottom Open Studios'
        }</h1>
      </header>
    </div>
  );
}