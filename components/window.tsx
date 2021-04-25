import Link from 'next/link';

interface WindowProps {
  artist: string,
  fullName: string,
}

export default function Window ({ artist, fullName }: WindowProps) {
  return (
    <div className="lg:grid grid-rows-window">
      <div className="row-start-2 flex justify-center items-center border-4 border-gray-700 rounded-sm">
        <Link href={`/${artist}`}>
          <a className="px-4 py-1.5 lg:py-0 h-full w-full flex justify-center items-center no-underline text-center leading-building font-fredericka text-lg lg:text-buildingLg text-black backdrop-filter backdrop-brightness-150 backdrop-blur rounded-sm">
            { fullName }
          </a>
        </Link>
      </div>
    </div>
  );
}
