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
      <header className="flex justify-center items-center absolute top-0 h-full w-full backdrop-filter backdrop-blur lg:backdrop-brightness-150">
        { !home && (
          <Link href="/">
            <a className="absolute no-underline left-0 px-2 m-2 text-base md:text-xl p-1 font-fredericka border-2 border-teal rounded-sm transition duration-300 hover:bg-white hover:bg-opacity-50">
            ← Back
            </a>
          </Link>
        )}
        <h1 className="font-fredericka text-gray-700 text-center text-xl md:text-3xl">{
          fullName ? fullName : 'Brickbottom Open Studios'
        }</h1>
      </header>
    </div>
  );
}