interface VideoProps {
  id: string,
}

export default function Video({ id }: VideoProps) {
  return (
    <div className="p-8 w-full">
      <iframe
        className="w-full"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      />
    </div>
  );
}
