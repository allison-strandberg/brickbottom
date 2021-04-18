import { Pieces } from '../pages/[artist]';

interface GalleryProps {
  artist: string,
  pieces: Pieces,
}

export default function Gallery({ artist, pieces }: GalleryProps) {
  return (
    <div>
      { pieces.map(({ filename, title }) => (
        <img className="p-4" src={require(`../public/images/${artist}/${filename}`)} />
      ))}
    </div>
  );
}

