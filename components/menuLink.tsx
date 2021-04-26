interface MenuLinkProps {
  href?: string,
  text?: string,
}

export default function MenuLink({ href, text }: MenuLinkProps) {
  return (
    <a className="py-2 hover:text-blue-200 transition duration-300" href={href} target="_blank">{text}</a>
  );
}
