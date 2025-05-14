
import React from "react";
import Icon from "@/components/ui/icon";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Gem" className="h-8 w-8 text-yellow-600" />
          <span className="font-bold text-xl font-montserrat text-gray-800">ЗолотоСкуп</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#prices" className="hidden md:block text-gray-700 hover:text-yellow-600 transition-colors">
            Цены
          </a>
          <a href="#advantages" className="hidden md:block text-gray-700 hover:text-yellow-600 transition-colors">
            Преимущества
          </a>
          <a href="#faq" className="hidden md:block text-gray-700 hover:text-yellow-600 transition-colors">
            Вопросы
          </a>
          <a href="tel:+78001234567" className="flex items-center gap-2">
            <Icon name="Phone" className="h-5 w-5 text-yellow-600" />
            <span className="hidden sm:block">8 (800) 123-45-67</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
