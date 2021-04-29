interface EasterEggProps {
  emoji: string,
  href: string,
  second?: boolean,
  internal?: boolean,
}

export default function EasterEgg({ emoji, href, second, internal }: EasterEggProps) {
  let component;
  if (internal) {
    component = (
      <Link href={href}>
        <div className="col-start-3 row-start-6 lg:grid grid-cols-ground-window hidden h-ground-window">
          <a
            className={`${second ? "col-start-4" : "col-start-2"} flex justify-center items-center rounded-sm transition duration-300 bg-opacity-50 bg-black hover:bg-opacity-50 border-4 border-beige hover:bg-beige lg:text-buildingLg text-white cursor-pointer`}
          >
            { emoji }
          </a>
      </div>
      </Link>
    );
  } else {
    component = (
      <div className="col-start-3 row-start-6 lg:grid grid-cols-ground-window hidden h-ground-window">
        <a
          className={`${second ? "col-start-4" : "col-start-2"} flex justify-center items-center rounded-sm transition duration-300 bg-opacity-50 bg-black hover:bg-opacity-50 border-4 border-beige hover:bg-beige lg:text-buildingLg text-white cursor-pointer`}
          href={href}
          target="_blank"
        >
          { emoji }
        </a>
    </div>
    );
  }
  return component;
}
