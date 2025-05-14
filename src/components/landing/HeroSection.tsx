
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl font-bold font-montserrat mb-4 text-gray-800">
            Выгодно продать золото <span className="text-yellow-600">прямо сейчас</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Скупаем золото любой пробы по максимально высоким ценам. 
            Быстрая оценка, честная оплата, без скрытых комиссий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-yellow-600 hover:bg-yellow-700">
              <Icon name="Calculator" className="mr-2 h-5 w-5" />
              Рассчитать стоимость
            </Button>
            <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50">
              <Icon name="PhoneCall" className="mr-2 h-5 w-5" />
              Позвонить нам
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
            alt="Золотые изделия" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
