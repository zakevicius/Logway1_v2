import React from 'react';
import { withTranslation } from 'react-i18next';
import Worker from './Worker.jsx';
import workers from './workers.json';
import CompanyInfo from './CompanyInfo.jsx';
import Logo from './Logo.jsx';

const Contacts = ({ t }) => {
  return (
    <section className='contacts' id='contacts'>
      <h3>
        <span className='red'>{t('contacts.title')[0]}</span>
        {t('contacts.title').slice(1)}
      </h3>
      <div className='workers'>
        <Logo />
        {workers.map((worker) => (
          <Worker key={worker.name} worker={worker} />
        ))}
      </div>
      <CompanyInfo />
    </section>
  );
};

export default withTranslation()(Contacts);
