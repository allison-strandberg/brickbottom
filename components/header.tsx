import Link from 'next/link';

export default function Header({ children }) {
  return (
    <>
      <header className="flex justify-center items-center">
        <Link href="/">
          <a className="absolute left-0 px-5 text-xl md:text-2xl p-1 font-fredericka">
          ← Back
          </a>
        </Link>
        {children}
      </header>
    </>
  );
}