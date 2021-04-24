import Link from 'next/link';

interface WindowProps {
  artist: string,
  fullName: string,
}

export default function Window ({ artist, fullName }: WindowProps) {
  return (
    <div className="grid grid-rows-window">
      <div className="row-start-2 flex justify-center items-center">
        <Link href={`/${artist}`}>
          <a className="px-4 h-full w-full block no-underline text-center leading-building font-fredericka text-buildingXs lg:text-buildingLg text-black">
            { fullName }
          </a>
        </Link>
      </div>
    </div>
  );
}
