interface SocialLinkProps {
  icon: string,
  item?: string,
  children?: React.ReactNode,
}

export default function SocialLink({ icon, item, children }: SocialLinkProps) {
  return (
    <>
      {item && (
        <div className="flex items-center">
          <img
            className="filter invert w-10"
            src={require(`../public/images/icons/${icon}.png`)}
          />
          <span className="p-2">{ item }</span>
        </div>
      )}
    </>
  );
}