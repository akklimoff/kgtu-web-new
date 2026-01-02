import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', organization: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      title: 'ПОЗВОНИТЕ НАМ',
      content: '+996 508 888 568',
      href: 'tel:+996508888568',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: 'НАПИШИТЕ НАМ',
      content: 'ttc@kstu.kg',
      href: 'mailto:ttc@kstu.kg',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: 'АДРЕС',
      content: '720044, Кыргызстан, г.Бишкек, пр.Ч.Айтматова, 66, офис 1/333',
      href: null,
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex gap-10 items-start">
        <div className="overflow-hidden w-full">
          {/* Hero Section */}
          <div className="mb-10 pb-6 border-b-4 border-primary">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium uppercase tracking-wider mb-4">
              Свяжитесь с нами
            </span>
            <h1 className="font-bold mb-3">Контакты</h1>
            <p className="text-lg text-text-secondary">
              Пожалуйста, дайте нам знать, если у вас есть вопрос, вы хотите оставить комментарий или
              вам нужна дополнительная информация о Центре трансфера технологий.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 border-2 border-border hover:border-primary transition-all text-center fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary border-2 border-primary-dark flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xs font-semibold text-text-secondary mb-2 tracking-wider uppercase">
                  {info.title}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-text-primary font-medium hover:text-primary transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-text-primary font-medium">{info.content}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white p-8 border-2 border-border max-w-3xl mx-auto mb-20 fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wide">Форма обратной связи</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border-2 border-green-500 text-green-700">
                Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Организация *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Название организации"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Ваше сообщение (минимум 100 символов)"
                  minLength={100}
                />
              </div>

              <button type="submit" className="btn-primary w-full md:w-auto px-8 py-3">
                Отправить
              </button>
            </form>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
