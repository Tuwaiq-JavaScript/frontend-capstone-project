import { ReactElement } from 'react';
import { Navbar } from './Navbar';
//  import { Footer } from './Footer';



interface LayoutProps {
    children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
    return (
        <>
          <Navbar />
            {children}
               {/* Footer/ */}
       
        </>
    );
}