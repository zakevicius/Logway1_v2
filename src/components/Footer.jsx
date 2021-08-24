import React from 'react';
import { withTranslation } from 'react-i18next';

const Footer = ({ t }) => {
  return (
    <footer>
      &copy; {new Date().getFullYear()} {t('copyright')}
    </footer>
  );
};

export default withTranslation()(Footer);
