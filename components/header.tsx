import Link from 'next/link';

interface HeaderProps {
  fullName?: string,
  home?: Boolean,
}

export default function Header({ fullName, home }: HeaderProps) {
  return (
    <div className="absolute z-10">
      <img
        src={require('../public/images/header.webp')}
        alt=""
        role="presentation"
      />
      <header className="flex justify-center items-center absolute top-0 h-full w-full">
        { !home && (
          <Link href="/">
            <a className="absolute left-0 px-5 text-xl md:text-2xl p-1 font-fredericka">
            ← Back
            </a>
          </Link>
        )}
        <h1 className="font-fredericka text-center">{
          fullName ? fullName : 'Brickbottom Open Studios'
        }</h1>
      </header>
    </div>
  );
}