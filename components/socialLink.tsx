interface SocialLinkProps {
  icon: string,
  item?: string,
}

export default function SocialLink({ icon, item }: SocialLinkProps) {
  let text = item;
  let url;
  if (icon === 'email' && item && item.includes('@')) {
    text = item;
    url = `mailto:${item}`;
  }
  if (icon === 'website') {
    text = item;
    url = `https://${item}`;
  }
  if (icon === 'instagram') {
    text = `@${item}`;
    url = `https://www.instagram.com/${item}`;
  }
  if (icon === 'twitter') {
    text = `@${item}`;
    url = `https://www.twitter.com/${item}`;
  }
  if (icon === 'facebook') {
    text = `${item}`;
    url = `https://www.facebook.com/${item}`;
  }
  const content = (
    <>
      <img
        className="filter invert w-10"
        src={require(`../public/images/icons/${icon}.png`)}
      />
      <span className="p-2">{ text }</span>
    </>
  );
  if (item && url) {
    return (
      <a
        className="flex items-center p-2 text-white transition duration-300 hover:bg-gray-600 rounded-sm break-all"
        href={url}
        target="_blank"
      >
        { content }
      </a>
    );
  }
  if (item) {
    return (
      <div className="flex items-center p-2">
        { content }
      </div>
    );
  }
  return null;
}