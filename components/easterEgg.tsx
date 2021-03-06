import Link from 'next/link';

interface EasterEggProps {
  emoji: string,
  href: string,
  right?: boolean,
  second?: boolean,
  internal?: boolean,
}

export default function EasterEgg({ emoji, href, right, second, internal }: EasterEggProps) {
  let component;
  if (internal) {
    component = (
      <Link href={href}>
        <a
          className={`${second ? "col-start-4" : "col-start-2"} flex justify-center items-center rounded-sm transition duration-300 bg-opacity-50 bg-black hover:bg-opacity-50 border-4 border-beige hover:bg-beige lg:text-buildingLg text-white cursor-pointer`}
        >
          { emoji }
        </a>
      </Link>
    );
  } else {
    component = (
      <a
        className={`${second ? "col-start-4" : "col-start-2"} flex justify-center items-center rounded-sm transition duration-300 bg-opacity-50 bg-black hover:bg-opacity-50 border-4 border-beige hover:bg-beige lg:text-buildingLg text-white cursor-pointer`}
        href={href}
        target="_blank"
      >
        { emoji }
      </a>
    );
  }
  return component;
}
