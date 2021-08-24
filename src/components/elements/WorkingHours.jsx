import React from 'react';
import { withTranslation } from 'react-i18next';

const WorkingHours = ({ t }) => {
  return (
    <div className='wHours'>
      <table>
        <caption>{t('footer.workHours.title')}</caption>
        <tbody>
          <tr>
            <td>{t('footer.workHours.1')}</td>
            <td rowSpan='5'>{t('footer.workHours.time')}</td>
          </tr>
          <tr>
            <td>{t('footer.workHours.2')}</td>
          </tr>
          <tr>
            <td>{t('footer.workHours.3')}</td>
          </tr>
          <tr>
            <td>{t('footer.workHours.4')}</td>
          </tr>
          <tr>
            <td>{t('footer.workHours.5')}</td>
          </tr>
          <tr>
            <td>{t('footer.workHours.6')}</td>
            <td rowSpan='2'>-</td>
          </tr>
          <tr>
            <td>{t('footer.workHours.7')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default withTranslation()(WorkingHours);
