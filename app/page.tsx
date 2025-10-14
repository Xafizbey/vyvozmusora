'use client';

import { useState } from 'react';
import { Phone, Truck, Trash2, Building2, Chrome as HomeIcon, Package, Calculator, CircleCheck as CheckCircle, Star, MapPin, Mail, MessageCircle, Container } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import img1 from '@/assets/2025-10-14 23.38.46.jpg';
import img2 from '@/assets/2025-10-14 23.39.52.jpg';
import img3 from '@/assets/2025-10-14 23.39.56.jpg';
import img4 from '@/assets/2025-10-14 23.39.59.jpg';

export default function Home() {
  const [wasteType, setWasteType] = useState('');
  const [volume, setVolume] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    if (!wasteType || !volume) return;

    const basePrice = wasteType === 'construction' ? 300 :
                     wasteType === 'household' ? 200 :
                     wasteType === 'office' ? 250 : 200;

    const volumeNum = parseFloat(volume);
    const price = basePrice * volumeNum;
    setCalculatedPrice(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">Вывоз мусора </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+79967711327" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Phone className="h-5 w-5" />
              <span className="font-semibold hidden md:inline">+7 (996) 771-13-27</span>
            </a>
            <Button onClick={() => window.open('tel:+79967711327', '_blank')} className="bg-blue-600 hover:bg-blue-700">
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
                <span className="text-white text-sm font-medium">🚛 Работаем с 2015 года</span>
              </div>
              
              <h1 className="text-xl md:text-4xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                Вывоз строительного мусора в Санкт-Петербурге и Ленинградской области
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-50 drop-shadow">
                Профессиональный вывоз строительного мусора. Собственный автопарк из 7 машин.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all">
                  <Calculator className="mr-2 h-5 w-5" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 shadow-xl hover:shadow-2xl transition-all border-0">
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
            
            <div className="relative hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group">
                    <img
                      src={img1.src}
                      alt="Контейнер ПУХТО для строительного мусора"
                      className="rounded-xl shadow-2xl w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ring-2 ring-white/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-3 left-3 text-white font-semibold text-sm">Контейнер ПУХТО</div>
                  </div>
                  <div className="relative group">
                    <img
                      src={img2.src}
                      alt="Контейнер для мусора"
                      className="rounded-xl shadow-2xl w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ring-2 ring-white/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-3 left-3 text-white font-semibold text-sm">Разные объемы</div>
                  </div>
                </div>
                
                <div className="space-y-4 mt-8">
                  <div className="relative group">
                    <img
                      src={img3.src}
                      alt="Вывоз мусора"
                      className="rounded-xl shadow-2xl w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ring-2 ring-white/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-3 left-3 text-white font-semibold text-sm">Быстрая подача</div>
                  </div>
                  <div className="relative group">
                    <img
                      src={img4.src}
                      alt="Грузовик для вывоза мусора"
                      className="rounded-xl shadow-2xl w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ring-2 ring-white/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-3 left-3 text-white font-semibold text-sm">Собственный парк</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        {/* Декоративные элементы */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </section>

      <section className="py-16 bg-container-pattern-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '8+', label: 'Машин в автопарке' },
              { number: '24/7', label: 'Часы работы' },
              { number: '6-27', label: 'Объем контейнеров м³' },
              { number: '100%', label: 'Экологичность' }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-container-pattern-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг по вывозу отходов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: 'Строительный мусор',
                description: 'Вывоз строительных отходов, бетона, кирпича, штукатурки после ремонта или демонтажа',
                features: ['Контейнеры 6-36 м³', 'Быстрая подача', 'Помощь в загрузке'],
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80'
              },
              {
                icon: HomeIcon,
                title: 'Бытовой мусор',
                description: 'Вывоз бытовых отходов из квартир, домов, дач и садовых участков',
                features: ['Мебель и техника', 'Вывоз хлама', 'Уборка территории'],
                image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80'
              },
              {
                icon: Package,
                title: 'Офисный мусор',
                description: 'Вывоз офисных отходов, мебели, оргтехники и архивов',
                features: ['Переезд офиса', 'Утилизация документов', 'Регулярный вывоз'],
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80'
              },
              {
                icon: Container,
                title: 'Аренда контейнеров ПУХТО',
                description: 'Предоставление контейнеров ПУХТО различного объема для сбора отходов',
                features: ['От 6 до 36 м³', 'Гибкие сроки', 'Доставка и вывоз'],
                image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400&q=80'
              },
              {
                icon: Trash2,
                title: 'Вывоз на утилизацию',
                description: 'Легальная утилизация всех видов отходов с предоставлением документов',
                features: ['Экологичность', 'Документы', 'Сертификаты'],
                image: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&q=80'
              },
              {
                icon: Truck,
                title: 'Транспортировка',
                description: 'Транспортировка грузов самосвалами и бортовыми машинами',
                features: ['Любые районы', 'Быстрая подача', 'Опытные водители'],
                image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400&q=80'
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition border-t-4 border-t-blue-600 overflow-hidden">
                {service.image && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-truck-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор стоимости</h2>
              <p className="text-xl text-gray-600">Рассчитайте примерную стоимость вывоза мусора</p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="waste-type" className="text-base">Тип мусора</Label>
                    <Select value={wasteType} onValueChange={setWasteType}>
                      <SelectTrigger id="waste-type" className="mt-2">
                        <SelectValue placeholder="Выберите тип мусора" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Строительный мусор</SelectItem>
                        <SelectItem value="household">Бытовой мусор</SelectItem>
                        <SelectItem value="office">Офисный мусор</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="volume" className="text-base">Объем (м³)</Label>
                    <Input
                      id="volume"
                      type="number"
                      placeholder="Введите объем"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="mt-2"
                      min="1"
                    />
                  </div>

                  <Button
                    onClick={calculatePrice}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    Рассчитать стоимость
                  </Button>

                  {calculatedPrice !== null && (
                    <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
                      <p className="text-gray-600 mb-2">Примерная стоимость:</p>
                      <p className="text-4xl font-bold text-blue-600">{calculatedPrice} ₽</p>
                      <p className="text-sm text-gray-500 mt-2">Точную стоимость уточняйте у менеджера</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-container-pattern-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600">Почему выбирают нас</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: 'Собственный автопарк',
                description: '35 единиц техники различной грузоподъемности'
              },
              {
                icon: CheckCircle,
                title: 'Легальная утилизация',
                description: 'Все документы и сертификаты об утилизации'
              },
              {
                icon: Phone,
                title: 'Быстрая подача',
                description: 'Подача машины в течение 1-2 часов'
              },
              {
                icon: Star,
                title: 'Опытные специалисты',
                description: 'Профессиональные водители и грузчики'
              }
            ].map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition">
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

      <section className="py-20 bg-container-pattern-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Александр М.',
                text: 'Отличная компания! Вывезли весь строительный мусор после ремонта квартиры. Приехали вовремя, работали быстро и аккуратно.',
                rating: 5
              },
              {
                name: 'Елена П.',
                text: 'Заказывали контейнер для дачи. Все четко, без задержек. Цены адекватные, персонал вежливый. Рекомендую!',
                rating: 5
              },
              {
                name: 'Дмитрий К.',
                text: 'Пользуемся услугами на регулярной основе для нашего офиса. Всегда все вовремя, никаких проблем. Спасибо!',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-blue-100">Закажите вывоз мусора или получите консультацию</p>
            </div>

            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите ваш заказ или вопрос"
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Отправить заявку
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
                <span className="text-xl font-bold text-white">Title</span>
              </div>
              <p className="text-sm">
                Профессиональный вывоз мусора в Санкт-Петербурге и Ленинградской области
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm">
                <li>Вывоз строительного мусора</li>
                <li>Вывоз бытового мусора</li>
                <li>Вывоз офисного мусора</li>
                <li>Аренда контейнеров</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href="tel:+79210900858" className="hover:text-blue-400">+7 (921) 090-08-58</a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@berkana.spb.ru" className="hover:text-blue-400">info@berkana.spb.ru</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Индустриальный пр. 44/2, офис 527, Санкт-Петербург</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Режим работы</h3>
              <p className="text-sm mb-4">Ежедневно: 8:00 - 22:00</p>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Вывоз мусора в Санкт-Петербурге и Ленинградской области. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
