import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { navItems } from '../../data/navigation';
import logoDark from '../../assets/Logo-black.svg?url';
import logoWhite from '../../assets/Logo-white.svg?url';
import fbSvg from '../../assets/fb.svg?url';
import igSvg from '../../assets/ig.svg?url';
import linkedinSvg from '../../assets/in.svg?url';
import tiktokSvg from '../../assets/tt.svg?url';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen">
            <Navbar links={navItems} />
            <main>{children}</main>
            <Footer 
             logoDark={logoDark}
             logoWhite={logoWhite}
             fbSvg={fbSvg}
             igSvg={igSvg}
             linkedinSvg={linkedinSvg}
             tiktokSvg={tiktokSvg}
            />
        </div>
    )
};
export default Layout;