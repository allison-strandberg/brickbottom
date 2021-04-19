import { Pieces } from '../pages/[artist]';

interface GalleryProps {
  artist: string,
  pieces: Pieces,
}

export default function Gallery({ artist, pieces }: GalleryProps) {
  return (
    <div className="flex flex-wrap justify-center max-w-2xl">
      { pieces.map(({ filename, title }) => (
        <img
          className="w-32 h-32 p-2"
          src={require(`../public/images/${artist}/${filename}`)} 
          key={`${filename}-thumb`}
        />
      ))}
    </div>
  );
}

