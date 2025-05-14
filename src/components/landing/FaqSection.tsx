
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqSection: React.FC = () => {
  const faqItems: FaqItemProps[] = [
    {
      question: "Какие документы нужны для продажи золота?",
      answer: "Для продажи золота вам потребуется только паспорт или иной документ, удостоверяющий личность."
    },
    {
      question: "Как определяется проба золота?",
      answer: "Мы используем профессиональное оборудование для определения пробы: специальные реактивы, электронные и рентгенофлуоресцентные анализаторы."
    },
    {
      question: "Можно ли продать золото с драгоценными камнями?",
      answer: "Да, мы принимаем изделия с драгоценными камнями. Стоимость камней оценивается отдельно и прибавляется к стоимости золота."
    },
    {
      question: "Какой минимальный вес золота вы принимаете?",
      answer: "Мы принимаем золото любого веса, даже самые маленькие изделия или их части."
    },
    {
      question: "Как быстро я получу деньги за своё золото?",
      answer: "Выплата производится сразу после оценки изделий. Вы можете получить деньги наличными или на банковскую карту."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-montserrat text-center mb-12 text-gray-800">
          Часто задаваемые вопросы
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-montserrat">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
