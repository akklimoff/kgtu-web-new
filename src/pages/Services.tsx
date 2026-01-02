import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Services() {
  const services = {
    forMillers: [
      'Оптимизация пшеничных и мучных смесей',
      { title: 'Адаптация муки для конечного использования', subtitle: 'Точное дозирование добавок' },
      'Анализ различных потоков мукомольных заводов',
      'Оценка воздействия поврежденного крахмала',
      { title: 'Определение влияния добавок и улучшителей', subtitle: 'Оптимизация качества муки' },
      'Контроль муки с различных вальцовых станков',
    ],
    forBakers: [
      'Проверка соответствия поставляемой муки',
      'Изучение реологического поведения богатой клетчаткой муки',
      'Разработка безглютеновых продуктов',
      'Изучение формул из цельной пшеницы',
      'Испытания новых смесей',
      'Оптимизация добавок и рецептур',
    ],
  };

  return (
    <div className="container py-8">
      <div className="flex gap-10 items-start">
        <div className="overflow-hidden w-full">
          {/* Hero Section */}
          <div className="mb-10 pb-6 border-b-4 border-primary">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium uppercase tracking-wider mb-4">
              Наши Услуги
            </span>
            <h1 className="font-bold mb-3">
              Лабораторный Анализ Качества Муки
            </h1>
          </div>

          <div className="mb-20 mt-8">
            <div className="content-section fade-in">
              <p className="text-lg leading-relaxed mb-4">
                Центр трансфера технологий, образования и предпринимательства объявляет о запуске
                сервисной услуги по <strong>анализу качества и реологических свойств муки</strong> на
                базе УПЦ «Технолог» КГТУ им. И. Раззакова.
              </p>
              <p className="text-text-secondary">
                Это был долгий и сложный путь, в ходе которого в УПЦ «Технолог» при поддержке проекта
                GIZ «Профессиональное образование в Центральной Азии» был установлен лабораторный и
                производственный комплекс, а также были обучены преподаватели университета и технологи
                мукомольных предприятий.
              </p>
            </div>

            <div className="content-section fade-in">
              <h3 className="gradient-text mb-4">Наши Достижения</h3>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>Организованы партнерские отношения с технологическим центром Muhlenchemie (Казахстан, г. Алматы)</li>
                <li>Апробирована линейка улучшителей муки, ферментов, витаминных и минеральных премиксов, эмульгаторов</li>
                <li>Изучены возможности применения мучных смесей и концентратов</li>
                <li>Разработаны индивидуальные рецептуры и функциональные добавки</li>
              </ul>
              <p className="mt-4 text-lg font-semibold text-primary">
                Вместе мы сделаем муку лучше!
              </p>
            </div>

            <div className="content-section fade-in">
              <h3 className="gradient-text mb-4">Наши Возможности</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-border hover:border-primary transition-all">
                  <p className="font-semibold mb-2">Анализ Теста</p>
                  <p className="text-sm text-text-secondary">
                    Измерение характеристик теста во время замеса, качество крахмала и белка
                  </p>
                </div>
                <div className="bg-white p-4 border border-border hover:border-primary transition-all">
                  <p className="font-semibold mb-2">Реологические Свойства</p>
                  <p className="text-sm text-text-secondary">
                    Измерение прочности, растяжимости, эластичности теста при выпекании
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section fade-in">
              <h3 className="gradient-text mb-4">Услуги для Мукомолов</h3>
              <div className="flex flex-col gap-3">
                {services.forMillers.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      {typeof service === 'string' ? (
                        <p className="font-medium">{service}</p>
                      ) : (
                        <>
                          <p className="font-medium">{service.title}</p>
                          <p className="text-sm text-text-secondary">{service.subtitle}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="content-section fade-in">
              <h3 className="gradient-text mb-4">Услуги для Пекарей</h3>
              <div className="flex flex-col gap-3">
                {services.forBakers.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <p className="font-medium">{service}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-8 bg-primary border-4 border-primary-dark fade-in">
              <h3 className="text-white font-bold mb-3 text-xl uppercase tracking-wide">
                Свяжитесь с Нами
              </h3>
              <p className="text-white/90 mb-6">
                Получите профессиональную консультацию и узнайте больше о наших услугах
              </p>
              <Link to="/contacts">
                <button className="bg-white text-primary px-6 py-3 font-medium uppercase text-sm tracking-wide hover:bg-gray-100 transition-colors">
                  Оставить Заявку
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
