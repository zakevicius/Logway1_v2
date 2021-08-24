import React from 'react';
import { withTranslation } from 'react-i18next';
import WorkingHours from './WorkingHours.jsx';
import Map from './Map.jsx';

const CompanyInfo = ({ t }) => {
  return (
    <div className='companyInfo'>
      <div className='companyInfo-actualInfo'>
        <p>{t('footer.address.line1')}</p>
        <p>{t('footer.address.line2')}</p>
        <p>{t('footer.address.line3')}</p>
        <p>
          <a href='tel:+37062176494'>+37062176494</a>
        </p>
        <p>
          <a href='mailto:info@logway1.lt'>info@logway1.lt</a>
        </p>
      </div>
      <WorkingHours />
      <Map />
    </div>
  );
};

export default withTranslation()(CompanyInfo);
