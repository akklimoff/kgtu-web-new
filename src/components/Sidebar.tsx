import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Главная', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )},
  { path: '/about', label: 'О нас', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )},
  { path: '/news', label: 'Новости', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  )},
  { path: '/services', label: 'Услуги', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  )},
  { path: '/contacts', label: 'Контакты', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )},
];

const staffMembers = [
  {
    name: 'Алмасбеков Айбек Алмасбекович',
    role: 'Менеджер ЦТТ',
    initials: 'АА'
  },
  {
    name: 'Халов Расулбек Шамшиддинович',
    role: 'Менеджер по интеллектуальной собственности',
    initials: 'ХР'
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden lg:block w-64 flex-shrink-0 fade-in-right">
      <div className="sticky top-24 space-y-6">
        {/* Navigation Card */}
        <div className="bg-white border-2 border-border overflow-hidden">
          <div className="p-4 bg-primary border-b-2 border-primary-dark">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">Навигация</h3>
          </div>
          <nav className="p-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 transition-all mb-1 border-l-4 ${
                  location.pathname === item.path
                    ? 'border-primary bg-primary-light text-primary font-medium'
                    : 'border-transparent text-text-secondary hover:bg-surface hover:text-text-primary hover:border-border-dark'
                }`}
              >
                {item.icon}
                <span className="text-sm uppercase tracking-wide">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Staff Cards */}
        {staffMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-5 border-2 border-border hover:border-primary transition-all scale-in"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-3 border-2 border-primary-dark">
                <span className="text-white font-bold text-lg">{member.initials}</span>
              </div>
              <h4 className="text-xs font-semibold text-text-primary mb-1 leading-tight uppercase tracking-wide">
                {member.name.split(' ')[0]} {member.name.split(' ')[1][0]}.
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {member.role}
              </p>
            </div>
          </div>
        ))}

        {/* Contact Card */}
        <div className="bg-primary p-5 text-white border-4 border-primary-dark">
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Нужна помощь?</h4>
          <p className="text-sm text-white/90 mb-4 leading-relaxed">
            Свяжитесь с нами для получения дополнительной информации
          </p>
          <a
            href="/contacts"
            className="block w-full bg-white text-primary font-medium text-sm py-2.5 text-center hover:bg-gray-100 transition-all uppercase tracking-wide"
          >
            Связаться
          </a>
        </div>
      </div>
    </div>
  );
}
