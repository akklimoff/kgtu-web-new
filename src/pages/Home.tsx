import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const partners = [
    'Кыргызский государственный технический университет имени И.Раззакова (КГТУ)',
    'Ассоциация производителей обогащенной муки и хлебопродуктов (АПОИиХ)',
    'Ассоциация поставщиков (производителей и дистрибьюторов)',
    'Региональная программа GIZ "Профессиональное образование в Центральной Азии"',
  ];

  const tasks = [
    'Внедрение новых технологий в частном секторе в форме семинаров по новым технологиям и бизнес тематике',
    'Предоставление высококачественных тренингов, профориентации и коучинга',
    'Обеспечение возможности использования партнерами Меморандума лабораторного оборудования друг друга в качестве технической базы',
    'Интеграция в международные (Евразийские и Европейские) сети трансфера технологий на правах технологического брокера',
    'Аналитическая, экспертная, нормативная, образовательная и информационная деятельность в области пищевой промышленности',
    'Внедрение и тиражирование современных технологий по проектированию и производству инновационных видов пищевых продуктов',
    'Осуществление международного научного сотрудничества в пищевой области по различным тематическим направлениям',
  ];

  const achievements = [
    { type: 'Круглые столы', count: 7, desc: 'по вопросам пищевой промышленности' },
    { type: 'Тренинги', count: 11, desc: 'бизнес, пищевая безопасность, технологии производства' },
    { type: 'Конкурсы', count: 3, desc: 'ярмарка идей, битва пекарей, региональная олимпиада' },
  ];

  const services = [
    {
      title: 'Организация тренингов',
      desc: 'Проведение тренингов по различной тематике в сфере пищевой промышленности, пищевой безопасности, технологии производства',
    },
    {
      title: 'Консультационные услуги',
      desc: 'Предоставление консультационных услуг и экспертного сопровождения для предприятий пищевой промышленности',
    },
    {
      title: 'Технологический аудит',
      desc: 'Аудит предприятий пищевой промышленности для определения необходимости и перспектив трансфера технологий',
    },
    {
      title: 'Разработка планов развития',
      desc: 'Разработка стратегических планов и планов развития предприятий',
    },
    {
      title: 'Маркетинговые исследования',
      desc: 'Проведение маркетинговых исследований и маркетингового анализа',
    },
    {
      title: 'Технологическое брокерство',
      desc: 'Посредничество для организаций инновационной инфраструктуры для формирования технологических запросов/предложений',
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex gap-8 items-start">
        <div className="flex-1">
          {/* Hero Section */}
          <div className="mb-10 pb-8 border-b-4 border-primary">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium uppercase tracking-wider mb-4">
              ЦТТОП
            </span>
            <h1 className="font-bold mb-4">
              Центр Трансфера Технологий, Образования и Предпринимательства
            </h1>
            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              Центр учрежден в ноябре 2017 года в рамках Меморандума о взаимодействии между Кыргызским
              государственным техническим университетом им. И.Раззакова, Ассоциацией производителей
              обогащенной муки и хлебопродуктов, Ассоциацией поставщиков и Региональной программой GIZ
              «Профессиональное образование в Центральной Азии».
            </p>
            <div className="flex gap-4 mt-6">
              <Link to="/services">
                <button className="btn-primary">Наши Услуги</button>
              </Link>
              <Link to="/contacts">
                <button className="btn-secondary">Связаться</button>
              </Link>
            </div>
          </div>

          {/* Mission Section */}
          <div className="content-section">
            <h3 className="gradient-text mb-4">Цель Центра</h3>
            <p className="text-text-secondary leading-relaxed">
              Развитие устойчивого, взаимовыгодного, действующего в обоих направлениях сотрудничества
              между частным сектором экономики и образовательными-научными учреждениями посредством
              внедрения новых технологий, оказания содействия в инновационном развитии и коммерциализации
              технологий.
            </p>
          </div>

          {/* Partners Section */}
          <div className="content-section">
            <h3 className="gradient-text mb-4">Партнерские Организации</h3>
            <p className="text-text-secondary mb-4">
              Основными партнерскими организациями – учредителями ЦТТОП выступают следующие
              государственные и юридические лица:
            </p>
            <div className="grid grid-cols-1 gap-3">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white border-l-4 border-primary hover:bg-surface transition-colors"
                >
                  <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-sm text-text-primary">{partner}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks Section */}
          <div className="content-section">
            <h3 className="gradient-text mb-4">Задачи Центра</h3>
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-text-secondary leading-relaxed">{task}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="content-section">
            <h3 className="gradient-text mb-4">Достижения 2017-2019</h3>
            <p className="text-text-secondary mb-4">
              ЦТТОП за период 2017-2019 гг. провел ряд семинаров различной направленности:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 border-2 border-border hover:border-primary transition-all text-center"
                >
                  <div className="w-16 h-16 bg-primary border-2 border-primary-dark flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-2xl">{item.count}</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2 uppercase tracking-wide text-sm">
                    {item.type}
                  </h4>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="content-section">
            <h3 className="gradient-text mb-4">Спектр Услуг</h3>
            <p className="text-text-secondary mb-4">
              В настоящее время ЦТТОП аффилирован и локализован в Учебно-практическом центре пищевой
              и перерабатывающей промышленности "Технолог" при КГТУ им. И. Раззакова и оказывает
              следующий спектр услуг:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-white border border-border hover:border-primary transition-all"
                >
                  <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1 text-sm">{service.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-10 p-8 bg-primary border-4 border-primary-dark">
            <h3 className="text-white font-bold mb-3 text-xl uppercase tracking-wide">
              Готовы к сотрудничеству?
            </h3>
            <p className="text-white/90 mb-6">
              Свяжитесь с нами для получения дополнительной информации о наших услугах и возможностях
              партнерства
            </p>
            <div className="flex gap-4">
              <Link to="/contacts">
                <button className="bg-white text-primary px-6 py-3 font-medium uppercase text-sm tracking-wide hover:bg-gray-100 transition-colors">
                  Связаться с нами
                </button>
              </Link>
              <Link to="/about">
                <button className="bg-transparent text-white border-2 border-white px-6 py-3 font-medium uppercase text-sm tracking-wide hover:bg-white/10 transition-colors">
                  Узнать больше
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
