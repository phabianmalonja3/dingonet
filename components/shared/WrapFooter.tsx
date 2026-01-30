
"use client"
import { usePathname } from 'next/navigation';
import Footer from './Footer';



export default function WrapFooter() {

    const pathname = usePathname();

    if (pathname.startsWith('/dashboard')) {
        return null; // Don't render anything on dashboard routes
    }
  return <Footer />;
}
