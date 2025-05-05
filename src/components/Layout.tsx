import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';

const RedFilledHeartIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-red-500 inline"
  >
    <path
      d="M8 14.6667C7.76667 14.6667 7.53333 14.6 7.33333 14.4667C3.46667 11.4 1.33333 9.33333 1.33333 6.4C1.33333 4.69333 2.66667 3.33333 4.33333 3.33333C5.46667 3.33333 6.66667 3.97333 8 5.33333C9.33333 3.97333 10.5333 3.33333 11.6667 3.33333C13.3333 3.33333 14.6667 4.69333 14.6667 6.4C14.6667 9.33333 12.5333 11.4 8.66667 14.4667C8.46667 14.6 8.23333 14.6667 8 14.6667ZM8 2C9.12667 2 10.6667 2.81333 10.6667 4C10.6667 4.4 10.6 4.8 10.5333 5.13333C10.2 4.46667 9.33333 3.73333 8 3.73333C6.66667 3.73333 5.8 4.46667 5.46667 5.13333C5.4 4.8 5.33333 4.4 5.33333 4C5.33333 2.81333 6.87333 2 8 2ZM8 14.6667C2.66667 9.46667 0 7.33333 0 4C0 1.72 1.72 0 4 0C5.6 0 7.12 0.84 8 2.09333C8.88 0.84 10.4 0 12 0C14.28 0 16 1.72 16 4C16 7.33333 13.3333 9.46667 8 14.6667Z"
      fill="red"
      style={{ fill: 'red' }}
    />
  </svg>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex justify-between h-full">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Trading Risk Simulation</h1>

              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <Globe className="h-6 w-6" />
              </button>
              <div className="sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                {t('nav.home')}
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                {t('nav.about')}
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                {t('nav.contact')}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-sm text-gray-500">
              {t('disclaimer')}
            </p>
            <span>Made with <RedFilledHeartIcon /> 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}