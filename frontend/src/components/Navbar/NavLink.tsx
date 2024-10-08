import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-md rounded md:p-0 hover:text-white">
      {title}
    </Link>
  );
};

export default NavLink;
