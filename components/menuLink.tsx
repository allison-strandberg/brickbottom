import Link from 'next/link';

interface MenuLinkProps {
  href?: string,
  text?: string,
  internal?: boolean,
  indent?: boolean,
}

export default function MenuLink({ href, text, internal, indent }: MenuLinkProps) {
  let component;
  if (internal) {
    component = (
      <Link href={href}>
        <a className={`py-2 hover:text-blue-200 transition duration-300 font-josefin ${indent ? "pl-2" : ""}`}>
          {text}
        </a>
      </Link>
    );
  } else {
    component = (
      <a className={`py-2 hover:text-blue-200 transition duration-300 font-josefin ${indent ? "pl-2" : ""}`} href={href} target="_blank">
        {text}
      </a>
    );
  }
  return component;
}
