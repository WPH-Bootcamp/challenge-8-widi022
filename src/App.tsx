import { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
import { navItems } from "./data/navigation"; 
import FooterCTA from "./components/layout/Footer";
import logoDark from "./assets/Logo-black.svg?url";
import logoWhite from "./assets/Logo-white.svg?url";
import fbSvg from "./assets/fb.svg?url";
import igSvg from "./assets/ig.svg?url";
import linkedinSvg from "./assets/in.svg?url";
import tiktokSvg from "./assets/tt.svg?url";

/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */



function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar links={navItems} />
      <Home />
      <FooterCTA
        logoDark={logoDark}
        logoWhite={logoWhite}
        fbSvg={fbSvg}
        igSvg={igSvg}
        linkedinSvg={linkedinSvg}
        tiktokSvg={tiktokSvg}
      />
    </div>
  );
}

export default App;
