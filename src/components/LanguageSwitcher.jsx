import React from 'react';
import { withTranslation } from 'react-i18next';

const LanguageSwitcher = ({ t, i18n }) => {
  const onClick = (e) => {
    i18n.changeLanguage(e.target.attributes['data-value']['value']);
  };

  return (
    <div className='languageSwitcher'>
      <div onClick={onClick} data-value='en'>
        EN
      </div>
      <div onClick={onClick} data-value='ru'>
        RU
      </div>
      <div onClick={onClick} data-value='lt'>
        LT
      </div>
    </div>
  );
};

export default withTranslation()(LanguageSwitcher);
