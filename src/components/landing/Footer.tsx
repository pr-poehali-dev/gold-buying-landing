
import React from "react";
import Icon from "@/components/ui/icon";

type FooterLinkSectionProps = {
  title: string;
  links: Array<{ name: string; href: string }>;
};

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 font-montserrat">{title}</h3>
    <ul className="space-y-2 text-gray-400">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:text-yellow-500 transition-colors">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactsSection: React.FC = () => (
  <div className="col-span-2 sm:col-span-1">
    <h3 className="text-lg font-semibold mb-4 font-montserrat">Контакты</h3>
    <ul className="space-y-2 text-gray-400">
      <li className="flex items-center gap-2">
        <Icon name="Phone" className="h-4 w-4" />
        <a href="tel:+78001234567" className="hover:text-yellow-500 transition-colors">
          8 (800) 123-45-67
        </a>
      </li>
      <li className="flex items-center gap-2">
        <Icon name="Mail" className="h-4 w-4" />
        <a href="mailto:info@zolotoskup.ru" className="hover:text-yellow-500 transition-colors">
          info@zolotoskup.ru
        </a>
      </li>
      <li className="flex items-center gap-2">
        <Icon name="MapPin" className="h-4 w-4" />
        <span>г. Москва, ул. Примерная, д. 123</span>
      </li>
    </ul>
  </div>
);

const SocialLinks: React.FC = () => (
  <div className="flex gap-4">
    {["Facebook", "Instagram", "Telegram", "Youtube"].map((social) => (
      <a 
        key={social} 
        href="#" 
        className="text-gray-400 hover:text-yellow-500 transition-colors"
        aria-label={social}
      >
        <Icon name={social} className="h-5 w-5" />
      </a>
    ))}
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Gem" className="h-8 w-8 text-yellow-500" />
              <span className="font-bold text-xl font-montserrat">ЗолотоСкуп</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Профессиональная скупка золота по выгодным ценам. Работаем с 2010 года.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterLinkSection 
              title="Услуги" 
              links={[
                { name: "Скупка золота", href: "#" },
                { name: "Скупка серебра", href: "#" },
                { name: "Скупка платины", href: "#" },
                { name: "Ювелирные изделия", href: "#" }
              ]} 
            />
            
            <FooterLinkSection 
              title="Информация" 
              links={[
                { name: "О компании", href: "#" },
                { name: "Цены", href: "#prices" },
                { name: "Вопросы и ответы", href: "#faq" },
                { name: "Контакты", href: "#" }
              ]} 
            />
            
            <ContactsSection />
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ЗолотоСкуп. Все права защищены.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
