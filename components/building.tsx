import Window from '../components/window'
import { ArtistProps } from '../pages/[artist]';

interface BuildingProps {
  allArtistsData: ArtistProps[], 
}

export default function Building({ allArtistsData }: BuildingProps) {
  return (
    <div className="relative w-full border-b-32 border-teal overflow-x-hidden flex justify-center">
      <div className="absolute w-full h-full flex flex-col justify-center items-center">
        <div className="h-buildingTop"/>
        <div
          className="lg:w-buildingCenter h-full lg:grid grid-cols-3 grid-rows-building gap-x-buildingX gap-y-buildingY"
        >
          {allArtistsData.map(({ artist, name }) => (
            <Window artist={artist} fullName={name.full} key={artist} />
          ))}
        </div>
      </div>
      <img
        className="min-w-lg opacity-20 lg:opacity-100 pointer-events-none"
        src={require('../public/images/building.webp')}
      />
    </div>
  );
}
