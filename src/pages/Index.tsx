
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
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

      {/* Основной блок */}
      <main>
        {/* Героический блок */}
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

        {/* Блок с преимуществами */}
        <section id="advantages" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-montserrat text-center mb-12 text-gray-800">
              Почему выбирают нас
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
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
              ].map((item, index) => (
                <Card key={index} className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      <Icon name={item.icon} className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-montserrat">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Блок с текущими ценами */}
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
                <TabsTrigger value="585">585 проба</TabsTrigger>
                <TabsTrigger value="750">750 проба</TabsTrigger>
                <TabsTrigger value="999">999 проба</TabsTrigger>
              </TabsList>

              {["585", "750", "999"].map((probe) => (
                <TabsContent key={probe} value={probe} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center font-montserrat">Скупка золота {probe} пробы</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { type: "Цепи и браслеты", price: Math.round(2000 + (parseInt(probe)/585)*1000) },
                      { type: "Кольца и серьги", price: Math.round(1950 + (parseInt(probe)/585)*950) },
                      { type: "Зубные коронки", price: Math.round(1800 + (parseInt(probe)/585)*900) },
                      { type: "Слитки", price: Math.round(2200 + (parseInt(probe)/585)*1100) }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-200 py-3">
                        <span>{item.type}</span>
                        <span className="font-semibold text-yellow-700">{item.price} ₽/г</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Процесс работы */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-montserrat text-center mb-12 text-gray-800">
              Как мы работаем
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
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
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-5xl font-bold text-yellow-100 mb-4">{item.number}</div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 right-0 w-1/2 h-1 border-t-2 border-dashed border-yellow-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-montserrat text-center mb-12 text-gray-800">
              Часто задаваемые вопросы
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
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
                ].map((item, index) => (
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

        {/* Контактная форма */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8">
                  <h2 className="text-2xl font-bold font-montserrat mb-4 text-gray-800">
                    Остались вопросы?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Заполните форму, и мы свяжемся с вами в ближайшее время для консультации
                  </p>
                  <form onSubmit={handleContactSubmit}>
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
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
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
              <div>
                <h3 className="text-lg font-semibold mb-4 font-montserrat">Услуги</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-yellow-500 transition-colors">Скупка золота</a></li>
                  <li><a href="#" className="hover:text-yellow-500 transition-colors">Скупка серебра</a></li>
                  <li><a href="#" className="hover:text-yellow-500 transition-colors">Скупка платины</a></li>
                  <li><a href="#" className="hover:text-yellow-500 transition-colors">Ювелирные изделия</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 font-montserrat">Информация</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-yellow-500 transition-colors">О компании</a></li>
                  <li><a href="#prices" className="hover:text-yellow-500 transition-colors">Цены</a></li>
                  <li><a href="#faq" className="hover:text-yellow-500 transition-colors">Вопросы и ответы</a></li>
                  <li><a href="#" className="hover:text-yellow-500 transition-colors">Контакты</a></li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-lg font-semibold mb-4 font-montserrat">Контакты</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Icon name="Phone" className="h-4 w-4" />
                    <a href="tel:+78001234567" className="hover:text-yellow-500 transition-colors">8 (800) 123-45-67</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Mail" className="h-4 w-4" />
                    <a href="mailto:info@zolotoskup.ru" className="hover:text-yellow-500 transition-colors">info@zolotoskup.ru</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="MapPin" className="h-4 w-4" />
                    <span>г. Москва, ул. Примерная, д. 123</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ЗолотоСкуп. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Icon name="Telegram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
