
"use client"
import { usePathname } from 'next/navigation';

import Navbar from './NavBar';

export default function WrapNav() {

    const pathname = usePathname();

    if (pathname.startsWith('/dashboard')) {
        return null; // Don't render anything on dashboard routes
    }
  return <Navbar />;
}
