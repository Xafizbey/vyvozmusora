"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Truck,
  Calculator,
  CircleCheck as CheckCircle,
  Star,
  MapPin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import img1 from "@/assets/2025-10-14 23.38.46.jpg";
import img2 from "@/assets/2025-10-14 23.39.52.jpg";
import img3 from "@/assets/2025-10-14 23.39.56.jpg";
import img4 from "@/assets/2025-10-14 23.39.59.jpg";
import Image from "next/image";
import whatsappIcon from "@/assets/whatsapp.png";
import telegramIcon from "@/assets/telegram.png";

export default function Home() {
  const [volume, setVolume] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const calculatePrice = () => {
    if (!volume) {
      setCalculatedPrice(null);
      return;
    }

    const volumeNum = parseFloat(volume);
    if (isNaN(volumeNum) || volumeNum <= 0) {
      setCalculatedPrice(null);
      return;
    }
    
    // Логика: чем больше объем, тем ниже цена за м³
    // 27 м³ = ~27 000 руб (1000 руб/м³)
    // 10 м³ = ~14 500 руб (1450 руб/м³)
    
    let pricePerCubic;
    
    if (volumeNum >= 20) {
      // Большие объемы - самая выгодная цена
      pricePerCubic = 1000;
    } else if (volumeNum >= 15) {
      pricePerCubic = 1150;
    } else if (volumeNum >= 10) {
      pricePerCubic = 1450;
    } else if (volumeNum >= 6) {
      pricePerCubic = 1800;
    } else {
      // Малые объемы - самая высокая цена за м³
      pricePerCubic = 2300;
    }

    const price = pricePerCubic * volumeNum;
    setCalculatedPrice(Math.round(price));
  };

  const handleCalculatorSubmit = () => {
    if (calculatedPrice === null) return;
    
    const message = `Заявка на вывоз строительного мусора\n\nОбъем: ${volume} м³\nРасчетная стоимость: ${calculatedPrice} ₽\n\nПрошу связаться со мной для уточнения деталей.`;
    
    const whatsappPhone = "79967711327";
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  // Автоматический расчет при изменении объема
  useEffect(() => {
    calculatePrice();
  }, [volume]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Формируем сообщение для WhatsApp
    const message = `Заявка от: ${formName}\nТелефон: ${formPhone}\nСообщение: ${formMessage}`;
    
    // Номер телефона для WhatsApp (замените на ваш номер)
    const whatsappPhone = "79967711327";
    const telegramPhone = "+79967711327";

    // Создаем ссылку на WhatsApp с предзаполненным сообщением
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      message
    )}`;

    const telegramUrl = `https://t.me/${telegramPhone}?text=${encodeURIComponent(message)}`;

    // Перенаправляем пользователя в WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  const scrollToCalculator = () => {
    const calculatorSection = document.querySelector('.bg-truck-pattern');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCall = () => {
    window.open("tel:+79967711327", "_self");
  };

  const handleWhatsAppContact = () => {
    const message = "Здравствуйте! Хочу заказать вывоз мусора.";
    const whatsappPhone = "79967711327";
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleTelegramContact = () => {
    const message = "Здравствуйте! Хочу заказать вывоз мусора.";
    const telegramPhone = "+79967711327";
    const telegramUrl = `https://t.me/${telegramPhone}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Плавающая кнопка WhatsApp */}
      <button
        onClick={handleWhatsAppContact}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Связаться в WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">
              Вывоз мусора{" "}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:+79967711327"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold hidden md:inline">
                +7 (996) 771-13-27
              </span>
            </a>
            <Button
              onClick={() => window.open("tel:+79967711327", "_blank")}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden bg-hero-waste">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/85"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white text-sm font-medium">
                  🚛 Работаем с 2015 года
                </span>
              </div>
              
              <h1 className="text-xl md:text-4xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                Вывоз строительного мусора в Санкт-Петербурге и Ленинградской
                области
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-50 drop-shadow">
                Профессиональный вывоз строительного мусора. Собственный
                автопарк из 8 машин.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all"
                  onClick={scrollToCalculator}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Рассчитать стоимость
                </Button>
                <Button
                  size="lg"
                  className="bg-green-500 text-white hover:bg-green-600 shadow-xl hover:shadow-2xl transition-all border-0"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Позвонить сейчас
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">8+</div>
                  <div className="text-sm text-blue-100">Машин</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">6-27</div>
                  <div className="text-sm text-blue-100">Объем м³</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-blue-100">Поддержка</div>
                </div>
              </div>
            </div>
            
            <div className="relative mt-12 md:mt-0">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <div className="relative group">
                    <img
                      src={img1.src}
                      alt="Контейнер ПУХТО для строительного мусора"
                      className="rounded-lg md:rounded-xl shadow-2xl w-full h-36 md:h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ring-2 ring-white/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg md:rounded-xl"></div>
                    <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 text-white font-semibold text-xs md:text-sm">
                      Контейнер ПУХТО
                    </div>
                  </div>
                  <div className="relative group">
                    <img
                      src={img2.src}
                      alt="Контейнер для строительного мусора"
                      className="rounded-lg md:rounded-xl shadow-2xl w-full h-36 md:h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ring-2 ring-white/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg md:rounded-xl"></div>
                    <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 text-white font-semibold text-xs md:text-sm">
                      Разные объемы
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 md:space-y-4 md:mt-8">
                  <div className="relative group">
                    <img
                      src={img3.src}
                      alt="Вывоз строительного мусора"
                      className="rounded-lg md:rounded-xl shadow-2xl w-full h-36 md:h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ring-2 ring-white/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg md:rounded-xl"></div>
                    <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 text-white font-semibold text-xs md:text-sm">
                      Быстрая подача
                    </div>
                  </div>
                  <div className="relative group">
                    <img
                      src={img4.src}
                      alt="Грузовик для вывоза строительного мусора"
                      className="rounded-lg md:rounded-xl shadow-2xl w-full h-36 md:h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ring-2 ring-white/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg md:rounded-xl"></div>
                    <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 text-white font-semibold text-xs md:text-sm">
                      Собственный парк
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        {/* Декоративные элементы */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      <section className="py-16 bg-container-pattern-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "8+", label: "Машин в автопарке" },
              { number: "24/7", label: "Часы работы" },
              { number: "6-27", label: "Объем контейнеров м³" },
              { number: "100%", label: "Экологичность" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-truck-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Калькулятор стоимости
              </h2>
              <p className="text-xl text-gray-600">
                Рассчитайте примерную стоимость вывоза мусора
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-blue-800 font-semibold text-center mb-2">
                      Вывоз строительного мусора
                    </p>
                    <div className="text-blue-600 text-sm space-y-1">
                      <p className="text-center font-medium">💰 Чем больше объем - тем выгоднее!</p>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                        <div>20+ м³: ~1000 ₽/м³</div>
                        <div>15-19 м³: ~1150 ₽/м³</div>
                        <div>10-14 м³: ~1450 ₽/м³</div>
                        <div>6-9 м³: ~1800 ₽/м³</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="volume" className="text-base">
                      Объем (м³)
                    </Label>
                    <Input
                      id="volume"
                      type="number"
                      placeholder="Введите объем"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="mt-2"
                      min="1"
                      step="0.5"
                    />
                  </div>

                  <Button
                    onClick={calculatePrice}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                    type="button"
                  >
                    Рассчитать стоимость
                  </Button>

                  {calculatedPrice !== null && (
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-300 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="text-center">
                        <p className="text-gray-600 mb-2 font-medium">
                          Примерная стоимость:
                        </p>
                        <p className="text-5xl font-bold text-blue-600 mb-1">
                          {calculatedPrice.toLocaleString("ru-RU")} ₽
                        </p>
                        <p className="text-sm text-gray-500">
                          Точную стоимость уточняйте у менеджера
                        </p>
                      </div>
                      
                      <Button
                        onClick={handleCalculatorSubmit}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        size="lg"
                        type="button"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Отправить заявку в WhatsApp
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция "Как это работает" */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Как это работает?
            </h2>
            <p className="text-xl text-gray-600">
              Простой процесс заказа в 4 шага
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Заявка",
                description: "Позвоните нам или оставьте заявку онлайн",
                icon: "📞",
              },
              {
                step: "2",
                title: "Расчет",
                description: "Рассчитаем стоимость и согласуем время подачи",
                icon: "💰",
              },
              {
                step: "3",
                title: "Подача контейнера",
                description: "Привезем контейнер в удобное для вас время",
                icon: "🚛",
              },
              {
                step: "4",
                title: "Вывоз мусора",
                description: "Заберем контейнер и утилизируем мусор легально",
                icon: "✅",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="text-5xl mb-4 text-center">{item.icon}</div>
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="text-blue-600 text-2xl">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center flex flex-col gap-4 mt-12 items-center">
            <Button
              size="lg"
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Оставить заявку в WhatsApp
            </Button>
            <Button
              size="lg"
              onClick={handleTelegramContact}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Оставить заявку в Telegram
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-container-pattern-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Наши преимущества
            </h2>
            <p className="text-xl text-gray-600">Почему выбирают нас</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: "Собственный автопарк",
                description:
                  "8 единиц техники различной грузоподъемности от 6 до 27 м³",
              },
              {
                icon: CheckCircle,
                title: "Легальная утилизация",
                description: "Все документы и сертификаты об утилизации",
              },
              {
                icon: Phone,
                title: "Быстрая подача",
                description: "Подача машины в течение 1-2 часов",
              },
              {
                icon: Star,
                title: "Опытные специалисты",
                description: "Профессиональные водители и грузчики",
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition"
              >
                <CardContent className="p-8">
                  <advantage.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Прайс-лист */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Прайс-лист
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачные цены на наши услуги
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Цены по объемам */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <CardTitle className="text-center">
                    📦 Цены по объемам
                  </CardTitle>
                  <CardDescription className="text-blue-100 text-center">
                    Строительный мусор
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { volume: "20+ м³", price: "~1 000 ₽/м³", total: "от 20 000 ₽", popular: true },
                      { volume: "15-19 м³", price: "~1 150 ₽/м³", total: "от 17 250 ₽" },
                      { volume: "10-14 м³", price: "~1 450 ₽/м³", total: "от 14 500 ₽" },
                      { volume: "6-9 м³", price: "~1 800 ₽/м³", total: "от 10 800 ₽" },
                      { volume: "до 6 м³", price: "~2 300 ₽/м³", total: "от 6 900 ₽" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`flex justify-between items-center p-4 rounded-lg ${
                          item.popular
                            ? "bg-green-50 border-2 border-green-500"
                            : "bg-gray-50"
                        }`}
                      >
                        <div>
                          <div className="font-bold text-gray-800 flex items-center gap-2">
                            {item.volume}
                            {item.popular && (
                              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                                ВЫГОДНО
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">{item.price}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">{item.total}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Дополнительные услуги */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                  <CardTitle className="text-center">
                    ⚡ Дополнительно
                  </CardTitle>
                  <CardDescription className="text-green-100 text-center">
                    Полный спектр услуг
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { service: "Срочная подача (1 час)", price: "+ 2 000 ₽" },
                      { service: "Погрузка грузчиками", price: "от 500 ₽/час" },
                      { service: "Подъем/спуск с этажа", price: "от 300 ₽/этаж" },
                      { service: "Вывоз в область (за КАД)", price: "от 50 ₽/км" },
                      { service: "Демонтаж конструкций", price: "договорная" },
                      { service: "Аренда контейнера (сутки)", price: "от 1 000 ₽" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                      >
                        <div className="font-medium text-gray-800">
                          {item.service}
                        </div>
                        <div className="font-bold text-green-600">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Важная информация */}
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💡</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Важная информация о ценах:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Окончательная цена зависит от типа мусора и удаленности объекта</li>
                    <li>✓ Бесплатная консультация и расчет стоимости</li>
                    <li>✓ Работаем без предоплаты - оплата после выполнения работ</li>
                    <li>✓ Предоставляем документы об утилизации</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                size="lg"
                onClick={scrollToCalculator}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Рассчитать точную стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-container-pattern-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">Что говорят о нас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Александр М.",
                text: "Отличная компания! Вывезли весь строительный мусор после ремонта квартиры. Приехали вовремя, работали быстро и аккуратно.",
                rating: 5,
              },
              {
                name: "Елена П.",
                text: "Заказывали контейнер для дачи. Все четко, без задержек. Цены адекватные, персонал вежливый. Рекомендую!",
                rating: 5,
              },
              {
                name: "Дмитрий К.",
                text: "Пользуемся услугами на регулярной основе для нашего офиса. Всегда все вовремя, никаких проблем. Спасибо!",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Часто задаваемые вопросы */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Как быстро вы можете подать контейнер?",
                answer:
                  "Стандартная подача контейнера - в течение 1-2 часов после подтверждения заказа. При необходимости срочной подачи (в течение часа) доступна за дополнительную плату 2000 ₽.",
              },
              {
                question: "Какие документы вы предоставляете?",
                answer:
                  "Мы предоставляем полный пакет документов: договор на оказание услуг, акт выполненных работ и справку об утилизации отходов на полигоне. Все работы ведутся официально и легально.",
              },
              {
                question: "Можно ли оставить контейнер на несколько дней?",
                answer:
                  "Да, конечно! Первые сутки включены в стоимость вывоза. Каждые последующие сутки аренды контейнера стоят от 1000 ₽ в зависимости от объема.",
              },
              {
                question: "Какой мусор можно загружать в контейнер?",
                answer:
                  "В контейнер можно загружать строительный мусор (кирпич, бетон, штукатурка), бытовой мусор, старую мебель, крупногабаритные отходы. Нельзя загружать: химикаты, ртутные лампы, опасные отходы, жидкости.",
              },
              {
                question: "Как происходит оплата?",
                answer:
                  "Оплата производится после выполнения работ. Мы не требуем предоплату. Принимаем наличные, банковские карты и безналичный расчет с НДС для юридических лиц.",
              },
              {
                question: "Работаете ли вы в выходные и праздники?",
                answer:
                  "Да, мы работаем ежедневно с 8:00 до 22:00, включая выходные и праздничные дни. Стоимость услуг в эти дни не меняется.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="text-lg font-bold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                      <span className="text-blue-600 text-2xl group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Остались вопросы? Мы с радостью на них ответим!
            </p>
            <Button
              size="lg"
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Задать вопрос в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-blue-100">
                Закажите вывоз мусора или получите консультацию
              </p>
            </div>

            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name" 
                      placeholder="Введите ваше имя" 
                      className="mt-2"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+7 (___) ___-__-__" 
                      className="mt-2"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите ваш заказ или вопрос"
                      className="mt-2"
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    Отправить в WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold text-white">Вывоз мусора</span>
              </div>
              <p className="text-sm">
                Профессиональный вывоз мусора в Санкт-Петербурге и Ленинградской
                области
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">О компании</h3>
              <ul className="space-y-2 text-sm">
                <li>Собственный автопарк</li>
                <li>Работаем с 2015 года</li>
                <li>Легальная утилизация</li>
                <li>Быстрая подача техники</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href="https://t.me/+79967711327" className="hover:text-blue-400">
                    +7 (996) 771-13-27
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Красносельское шоссе, городской посёлок Новоселье</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Режим работы</h3>
              <p className="text-sm mb-4">Ежедневно: 8:00 - 22:00</p>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant='link'
                  className="border-gray-600 hover:bg-gray-800"
                  onClick={handleWhatsAppContact}
                >
                  <Image src={whatsappIcon} alt="WhatsApp" width={32} height={32} />
                </Button>
                <Button
                  size="sm"
                  variant='link'
                  className="border-gray-600 hover:bg-gray-800"
                  onClick={handleTelegramContact}
                >
                  <Image src={telegramIcon} alt="telegram" width={32} height={32} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>
              &copy; 2025 Вывоз мусора в Санкт-Петербурге и Ленинградской
              области. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
