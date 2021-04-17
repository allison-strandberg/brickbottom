import Link from 'next/link';
import { Name } from '../pages/[artist]';

interface WindowProps {
  artist: string,
  name: Name,
}

export default function Window ({ artist, name }: WindowProps) {
  return (
    <div>
      <Link href={`/${artist}`}>
        <a>{name.first} {name.middle} {name.last}</a>
      </Link>
    </div>
  );
}
