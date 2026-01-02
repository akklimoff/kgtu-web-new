import Sidebar from '../components/Sidebar';

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: '15 Декабря 2024',
      title: 'Открытие нового лабораторного комплекса',
      excerpt: 'ЦТТОП объявляет об открытии современного лабораторного комплекса для анализа качества муки и хлебопродуктов.',
      category: 'Новости центра',
      image: null,
    },
    {
      id: 2,
      date: '10 Декабря 2024',
      title: 'Семинар по новым технологиям в пищевой промышленности',
      excerpt: 'Приглашаем на семинар, посвященный внедрению инновационных технологий в производство пищевых продуктов.',
      category: 'События',
      image: null,
    },
    {
      id: 3,
      date: '5 Декабря 2024',
      title: 'Партнерство с международными организациями',
      excerpt: 'ЦТТОП расширяет сотрудничество с европейскими сетями трансфера технологий.',
      category: 'Партнерство',
      image: null,
    },
    {
      id: 4,
      date: '1 Декабря 2024',
      title: 'Результаты регионального конкурса "Битва пекарей"',
      excerpt: 'Подведены итоги ежегодного конкурса среди профессиональных пекарей Центральной Азии.',
      category: 'Конкурсы',
      image: null,
    },
    {
      id: 5,
      date: '25 Ноября 2024',
      title: 'Тренинг по пищевой безопасности',
      excerpt: 'Завершился цикл тренингов по стандартам пищевой безопасности для предприятий-партнеров.',
      category: 'Обучение',
      image: null,
    },
    {
      id: 6,
      date: '20 Ноября 2024',
      title: 'Технологический аудит предприятий',
      excerpt: 'ЦТТОП провел комплексный технологический аудит трех крупных мукомольных предприятий.',
      category: 'Услуги',
      image: null,
    },
  ];

  const categories = [
    'Все новости',
    'Новости центра',
    'События',
    'Партнерство',
    'Конкурсы',
    'Обучение',
    'Услуги',
  ];

  return (
    <div className="container py-8">
      <div className="flex gap-8 items-start">
        <div className="flex-1">
          {/* Hero Section */}
          <div className="mb-10 pb-6 border-b-4 border-primary">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium uppercase tracking-wider mb-4">
              Новости и События
            </span>
            <h1 className="font-bold mb-3">Новости ЦТТОП</h1>
            <p className="text-lg text-text-secondary">
              Актуальные новости, события и достижения Центра трансфера технологий, образования и
              предпринимательства
            </p>
          </div>

          {/* Categories Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-xs font-medium uppercase tracking-wide transition-all border-2 ${
                    index === 0
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-text-secondary border-border hover:border-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <article
                key={item.id}
                className="bg-white border-2 border-border hover:border-primary transition-all p-6 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary border-2 border-primary-dark flex flex-col items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {item.date.split(' ')[0]}
                      </span>
                      <span className="text-white text-xs uppercase tracking-wide">
                        {item.date.split(' ')[1]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-surface text-primary text-xs font-medium uppercase tracking-wide border border-primary">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3 hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">{item.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <button className="text-primary font-medium text-sm uppercase tracking-wide hover:underline">
                        Читать далее →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center gap-2">
            <button className="w-10 h-10 bg-primary text-white border-2 border-primary-dark font-medium hover:bg-primary-dark transition-colors">
              1
            </button>
            <button className="w-10 h-10 bg-white text-text-primary border-2 border-border font-medium hover:border-primary transition-colors">
              2
            </button>
            <button className="w-10 h-10 bg-white text-text-primary border-2 border-border font-medium hover:border-primary transition-colors">
              3
            </button>
            <button className="w-10 h-10 bg-white text-text-primary border-2 border-border font-medium hover:border-primary transition-colors">
              →
            </button>
          </div>

          {/* CTA Section */}
          <div className="mt-10 p-8 bg-primary border-4 border-primary-dark">
            <h3 className="text-white font-bold mb-3 text-xl uppercase tracking-wide">
              Подписаться на новости
            </h3>
            <p className="text-white/90 mb-6">
              Получайте актуальную информацию о событиях, тренингах и достижениях ЦТТОП
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 border-2 border-primary-dark focus:ring-2 focus:ring-white focus:border-transparent outline-none"
              />
              <button className="bg-white text-primary px-6 py-3 font-medium uppercase text-sm tracking-wide hover:bg-gray-100 transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
