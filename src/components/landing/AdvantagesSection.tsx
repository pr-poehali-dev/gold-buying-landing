
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type AdvantageProps = {
  icon: string;
  title: string;
  description: string;
};

const AdvantageCard: React.FC<AdvantageProps> = ({ icon, title, description }) => (
  <Card className="transition-all hover:shadow-md hover:-translate-y-1">
    <CardContent className="p-6 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
        <Icon name={icon} className="h-8 w-8 text-yellow-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 font-montserrat">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const AdvantagesSection: React.FC = () => {
  const advantages: AdvantageProps[] = [
    {
      icon: "BadgeDollarSign",
      title: "Высокие цены",
      description: "Предлагаем максимально выгодные условия на рынке скупки золота"
    },
    {
      icon: "Scale",
      title: "Точная оценка",
      description: "Используем профессиональное оборудование для определения пробы и веса"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Гарантируем конфиденциальность и легальность всех операций"
    },
    {
      icon: "Clock",
      title: "Быстрая выплата",
      description: "Моментальное получение денег сразу после оценки изделий"
    },
    {
      icon: "FileText",
      title: "Без документов",
      description: "Не требуем лишних документов и справок для сдачи золота"
    },
    {
      icon: "MapPin",
      title: "Удобное расположение",
      description: "Наши пункты находятся в центре города с хорошей транспортной доступностью"
    }
  ];

  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-montserrat text-center mb-12 text-gray-800">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
