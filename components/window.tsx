import Link from 'next/link';
import { Name } from '../pages/[artist]';

interface WindowProps {
  artist: string,
  name: Name,
}

export default function Window ({ artist, name }: WindowProps) {
  return (
    <div className="grid grid-rows-window">
      <div className="row-start-2 flex justify-center items-center">
        <Link href={`/${artist}`}>
          <a className="px-4 h-full w-full no-underline text-center leading-building font-fredericka text-black">{name.first} {name.middle} {name.last}</a>
        </Link>
      </div>
    </div>
  );
}
