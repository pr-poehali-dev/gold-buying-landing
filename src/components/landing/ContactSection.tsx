
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useToast } from "@/components/ui/use-toast";

const ContactInfo: React.FC = () => (
  <div className="md:w-1/2 bg-yellow-600 text-white p-8 flex flex-col justify-center">
    <h3 className="text-2xl font-bold font-montserrat mb-6">
      Наши контакты
    </h3>
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <Icon name="MapPin" className="h-6 w-6 shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold">Адрес</h4>
          <p>г. Москва, ул. Примерная, д. 123</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Icon name="Clock" className="h-6 w-6 shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold">Режим работы</h4>
          <p>Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Icon name="Phone" className="h-6 w-6 shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold">Телефон</h4>
          <p>8 (800) 123-45-67</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Icon name="Mail" className="h-6 w-6 shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold">Email</h4>
          <p>info@zolotoskup.ru</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactForm: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время!",
    });
  };

  return (
    <div className="md:w-1/2 p-8">
      <h2 className="text-2xl font-bold font-montserrat mb-4 text-gray-800">
        Остались вопросы?
      </h2>
      <p className="text-gray-600 mb-6">
        Заполните форму, и мы свяжемся с вами в ближайшее время для консультации
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Ваше имя
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Иван Иванов"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Ваш телефон
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="+7 (___) ___-__-__"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Ваш вопрос
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Опишите ваш вопрос..."
            rows={4}
          ></textarea>
        </div>
        <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700 w-full">
          Отправить
        </Button>
      </form>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
