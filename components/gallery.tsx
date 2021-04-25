import { Pieces } from '../pages/[artist]';
import { SRLWrapper } from 'simple-react-lightbox-pro'

interface GalleryProps {
  artist: string,
  pieces: Pieces,
}

export default function Gallery({ artist, pieces }: GalleryProps) {
  const options = {
    settings: {
      autoplaySpeed: 0,
    },
    buttons: {
      showDownloadButton: false,
      showThumbnailsButton: false,
    }
  };
  const captions = pieces.map(({ title, materials, location, dimensions, year, price, note }) => (
    <div className="text-sm">
      <span className="text-2xl"><p>{title}</p></span>
      <p>{materials}</p>
      <p>{location}</p>
      <p>{dimensions}</p>
      <p>{year}</p>
      <p>{price}</p>
      <p>{note}</p>
    </div>
  ));
  const customCaptions = captions.map((caption, index) => (
    { id: index, caption }
  ));
  return (
    <SRLWrapper options={options} customCaptions={customCaptions}>
      <div className="flex flex-wrap justify-center max-w-2xl pt-20">
        { pieces.map(({ filename }) => (
          <img
            className="w-64 h-32 m-2 object-cover border-3 border-gray-900 border-opacity-20"
            src={require(`../public/images/${artist}/${filename}`)}
            key={`${filename}-thumb`}
          />
        ))}
      </div>
    </SRLWrapper>
  );
}

