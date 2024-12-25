import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{
    label: string;
    onClick: () => void;
  }>;
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#60A5FA]/90 backdrop-blur-sm z-50 md:hidden">
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-[#60A5FA] shadow-lg animate-slide-in-right">
        <div className="p-4 flex justify-end bg-[#60A5FA]">
          <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-start space-y-8 p-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                item.onClick();
                onClose();
              }}
              className="text-white text-xl hover:text-gray-200 transition-colors animate-fade-in"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;