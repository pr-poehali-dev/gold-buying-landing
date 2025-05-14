
import React from "react";

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLast = false }) => (
  <div className="relative">
    <div className="text-5xl font-bold text-yellow-100 mb-4">{number}</div>
    <h3 className="text-xl font-semibold mb-2 font-montserrat">{title}</h3>
    <p className="text-gray-600">{description}</p>
    {!isLast && (
      <div className="hidden md:block absolute top-8 right-0 w-1/2 h-1 border-t-2 border-dashed border-yellow-200"></div>
    )}
  </div>
);

const ProcessSection: React.FC = () => {
  const steps: Omit<ProcessStepProps, 'isLast'>[] = [
    {
      number: "01",
      title: "Обращение",
      description: "Приходите в наш пункт или свяжитесь с нами по телефону"
    },
    {
      number: "02",
      title: "Оценка",
      description: "Проводим точную оценку веса и пробы вашего золота"
    },
    {
      number: "03",
      title: "Расчёт",
      description: "Предлагаем честную цену исходя из текущего курса"
    },
    {
      number: "04",
      title: "Выплата",
      description: "Моментально выплачиваем деньги наличными или на карту"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-montserrat text-center mb-12 text-gray-800">
          Как мы работаем
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index} 
              {...step} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
