import Sidebar from '../components/Sidebar';

export default function About() {
  return (
    <div className="container py-8">
      <div className="flex gap-8 items-start">
        <div className="flex-1">
          {/* Hero Section */}
          <div className="mb-10 pb-6 border-b-4 border-primary">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium uppercase tracking-wider mb-4">
              О Центре
            </span>
            <h1 className="font-bold mb-3">
              Центр Трансфера Технологий КГТУ им. И. Раззакова
            </h1>
            <p className="text-lg text-text-secondary">
              Содействуем успешному внедрению инноваций в промышленность через перевод научных
              разработок в коммерчески успешные продукты и услуги.
            </p>
          </div>

          {/* Mission Section */}
          <div className="content-section">
            <h3 className="gradient-text mb-4">Наша миссия</h3>
            <p className="text-text-secondary">
              Содействовать успешному внедрению инноваций в промышленность через перевод научных
              разработок в коммерчески успешные продукты и услуги.
            </p>
          </div>

          {/* Directions Section */}
          <div className="content-section">
            <h3 className="gradient-text mb-4">Направления деятельности</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Горно-металлургическое производство',
                'Информационные технологии',
                'Энергетика',
                'Инженерное строительство',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white border border-border">
                  <div className="w-1 h-full bg-primary flex-shrink-0"></div>
                  <span className="text-sm text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages Section */}
          <div className="content-section">
            <h3 className="gradient-text mb-4">Наши преимущества</h3>
            <div className="space-y-3">
              {[
                {
                  title: 'Коммерциализация',
                  desc: 'Эффективная коммерциализация научных разработок'
                },
                {
                  title: 'Инвестиции',
                  desc: 'Инвестиционные возможности для перспективных проектов'
                },
                {
                  title: 'Экспертиза',
                  desc: 'Экспертная поддержка и консультации в области технологического трансфера'
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white border border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Section */}
          <div className="content-section">
            <h3 className="gradient-text mb-4">Партнерство</h3>
            <p className="text-text-secondary">
              Мы гордимся партнерством с ведущими компаниями и инвесторами для поддержки
              инноваций и создания устойчивых технологических решений.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-10 p-8 bg-primary border-4 border-primary-dark">
            <h3 className="text-white font-bold mb-3 text-xl uppercase tracking-wide">
              Присоединяйтесь к нам
            </h3>
            <p className="text-white/90 mb-6">
              Готовы начать сотрудничество? Свяжитесь с нами сегодня!
            </p>
            <a href="/contacts">
              <button className="bg-white text-primary px-6 py-3 font-medium uppercase text-sm tracking-wide hover:bg-gray-100 transition-colors">
                Связаться с нами
              </button>
            </a>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
