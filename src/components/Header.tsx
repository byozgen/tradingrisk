import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-2">
        {t('title')}
      </h1>
      <p className="text-xl mb-4">
        {t('subtitle')}
      </p>
      <p className="text-lg mb-4">
        {t('description')}
      </p>
    </div>
  );
};

export default Header; 