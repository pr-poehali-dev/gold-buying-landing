
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type GoldItemPrice = {
  type: string;
  price: number;
};

type PriceTabContentProps = {
  probe: string;
  items: GoldItemPrice[];
};

const PriceTabContent: React.FC<PriceTabContentProps> = ({ probe, items }) => (
  <TabsContent value={probe} className="bg-white rounded-lg shadow p-6">
    <h3 className="text-xl font-semibold mb-6 text-center font-montserrat">Скупка золота {probe} пробы</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between border-b border-gray-200 py-3">
          <span>{item.type}</span>
          <span className="font-semibold text-yellow-700">{item.price} ₽/г</span>
        </div>
      ))}
    </div>
  </TabsContent>
);

const PricesSection: React.FC = () => {
  // Функция для расчета цены в зависимости от пробы
  const calculatePrice = (basePrice: number, probeMultiplier: number): number => {
    return Math.round(basePrice + probeMultiplier);
  };

  // Генерация данных о ценах для разных проб
  const generatePriceData = (probe: string): GoldItemPrice[] => {
    const probeValue = parseInt(probe);
    const probeMultiplier = (probeValue / 585) * 1000;
    
    return [
      { type: "Цепи и браслеты", price: calculatePrice(2000, probeMultiplier) },
      { type: "Кольца и серьги", price: calculatePrice(1950, probeMultiplier - 50) },
      { type: "Зубные коронки", price: calculatePrice(1800, probeMultiplier - 100) },
      { type: "Слитки", price: calculatePrice(2200, probeMultiplier + 100) }
    ];
  };

  const probes = ["585", "750", "999"];

  return (
    <section id="prices" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-montserrat text-center mb-6 text-gray-800">
          Актуальные цены на золото
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Цены актуальны на {new Date().toLocaleDateString('ru-RU')}. Окончательная стоимость зависит от веса, пробы и состояния изделий.
        </p>

        <Tabs defaultValue="585" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {probes.map(probe => (
              <TabsTrigger key={probe} value={probe}>{probe} проба</TabsTrigger>
            ))}
          </TabsList>

          {probes.map(probe => (
            <PriceTabContent 
              key={probe} 
              probe={probe} 
              items={generatePriceData(probe)} 
            />
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PricesSection;
