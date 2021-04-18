import Window from '../components/window'
import { ArtistProps } from '../pages/[artist]';

interface BuildingProps {
  allArtistsData: ArtistProps[], 
}

export default function Building({ allArtistsData }: BuildingProps) {
  return (
    <div className="relative w-full border-t-32 border-b-32 border-teal">
      <div className="absolute w-full h-full flex justify-center">
        <div className="w-8/12 h-full grid grid-cols-3 gap-7">
          {allArtistsData.map(({ artist, name }) => (
            <Window artist={artist} name={name} key={artist} />
          ))}
        </div>
      </div>
      <img
        src={require('../public/images/building.webp')}
      />
    </div>
  );
}
