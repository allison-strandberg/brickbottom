import Link from 'next/link';

interface MenuLinkProps {
  href?: string,
  text?: string,
  internal?: boolean,
  indent?: boolean,
  className?: string,
}

export default function MenuLink({ href, text, internal, indent, className }: MenuLinkProps) {
  let component;
  if (internal) {
    component = (
      <Link href={href}>
        <a className={`py-2 hover:text-blue-200 transition duration-300 font-josefin ${indent ? "pl-2" : ""} ${className ? className : ""}`}>
          {text}
        </a>
      </Link>
    );
  } else {
    component = (
      <a className={`py-2 hover:text-blue-200 transition duration-300 font-josefin ${indent ? "pl-2" : ""} ${className ? className : ""}`} href={href} target="_blank">
        {text}
      </a>
    );
  }
  return component;
}
