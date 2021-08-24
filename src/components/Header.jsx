import React from 'react';
import { withTranslation } from 'react-i18next';
import sections from './elements/sections.json';

const Header = ({ t }) => {
  const onClick = (e) => {
    const scrollTarget = document.getElementById(
      e.currentTarget.dataset.section
    );
    const xPos = scrollTarget.offsetLeft;
    const yPos = scrollTarget.offsetTop;

    for (let i = 0; i <= yPos; i++) {
      setTimeout(() => {
        window.scrollTo(xPos, i);
      }, (1 / 10) * i);
    }
  };

  const onMouseEnter = (e) => {
    e.currentTarget.querySelector('.headerInfo-title').classList.add('active');
  };

  const onMouseLeave = (e) => {
    e.currentTarget
      .querySelector('.headerInfo-title')
      .classList.remove('active');
  };

  return (
    <header>
      <div className='headerLogo'></div>
      <div className='headerInfo'>
        {sections.map((item) => (
          <div
            data-section={item.section}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            key={item.section}
            className={`${item.section} header-item`}
          >
            <div className='background'></div>
            <h2 className='headerInfo-title'>
              <span className='red'>{t(item.title)[0]}</span>
              {t(item.title).slice(1)}
            </h2>
          </div>
        ))}
        <div
          data-section='contacts'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          className='contacts header-item'
        >
          <div className='background'></div>
          <h2 className='headerInfo-title'>
            <span className='red'>{t('header.contacts')[0]}</span>
            {t('header.contacts').slice(1)}
          </h2>
        </div>
      </div>
    </header>
  );
};

export default withTranslation()(Header);
