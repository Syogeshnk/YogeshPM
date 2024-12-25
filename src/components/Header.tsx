import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  onNavigate: {
    about: () => void;
    skills: () => void;
    experience: () => void;
    education: () => void;
    certifications: () => void;
    awards: () => void;
    projects: () => void;
    contact: () => void;
  };
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", onClick: onNavigate.about },
    { label: "Skills", onClick: onNavigate.skills },
    { label: "Education", onClick: onNavigate.education },
    { label: "Certifications", onClick: onNavigate.certifications },
    { label: "Awards", onClick: onNavigate.awards },
    { label: "Experience", onClick: onNavigate.experience },
    { label: "Projects", onClick: onNavigate.projects },
    { label: "Contact", onClick: onNavigate.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0A192F]/90 backdrop-blur-sm z-50 border-b-2 border-[#60A5FA]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-[#60A5FA] text-xl font-bold">Yogesh Kotkar</h1>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className="text-gray-300 hover:text-[#60A5FA] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
};

export default Header;