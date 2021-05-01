import Window from '../components/window'
import EasterEgg from '../components/easterEgg'
import { ArtistProps } from '../pages/[artist]';

interface BuildingProps {
  allArtistsData: ArtistProps[], 
}

export default function Building({ allArtistsData }: BuildingProps) {
  return (
    <div className="relative w-full overflow-x-hidden flex justify-center items-center">
      <div className="absolute w-full h-full flex flex-col justify-center items-center">
        <div className="h-buildingTop"/>
        <div className="absolute h-full w-30"></div>
        <div
          className="lg:w-buildingCenter h-full lg:grid grid-cols-3 grid-rows-building gap-x-buildingX gap-y-buildingY"
        >
          {allArtistsData.map(({ artist, name }) => (
            <Window artist={artist} fullName={name.full} key={artist} />
          ))}
          <div className="col-start-1 row-start-6 lg:grid grid-cols-ground-window hidden h-ground-window">
            <EasterEgg emoji="🍞" href="/bread" internal />
            <EasterEgg emoji="🥜" href="/nuts" internal second />
          </div>
          <div className="col-start-2 row-start-6 lg:grid grid-cols-door hidden">
            <a
              className="col-start-2 flex justify-center pt-2 rounded-sm transition duration-300 bg-opacity-50 hover:bg-opacity-50 border-4 border-beige hover:bg-beige font-fredericka text-lg lg:text-buildingLg text-white cursor-pointer"
              href="https://brickbottom.org/exhibition/recycle-remake-reimagine/"
              target="_blank"
            >
              Gallery
            </a>
          </div>
          <div className="col-start-3 row-start-6 lg:grid grid-cols-ground-window hidden h-ground-window">
            <EasterEgg emoji="🎹" href="https://www.youtube.com/watch?v=Ii08vAxsJ2A" right/>
            <EasterEgg emoji="🐦" href="https://www.youtube.com/watch?v=eDkIylIp26A" right second />
          </div>
        </div>
      </div>
      <picture>
        <source srcSet={require('../public/images/building.webp')} type="image/webp" />
        <source srcSet={require('../public/images/building.jpg')} type="image/jpeg" />
        <img
          className="min-w-lg opacity-20 lg:opacity-100 pointer-events-none"
          src={require('../public/images/building.jpg')}
          alt="A photo of the Brickbottom building"
        />
      </picture>
    </div>
  );
}
