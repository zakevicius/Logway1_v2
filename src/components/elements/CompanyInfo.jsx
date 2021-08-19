import React, {useRef} from 'react';
import WorkingHours from './WorkingHours.jsx';
import Map from './Map.jsx';

const CompanyInfo = () => {
  return (
      <div className='companyInfo'>
        <div className='companyInfo-actualInfo'>
          <p>Galinės g. 1, korp. C, 310b kab.</p>
          <p>Galinės k., Avižienių sen.</p>
          <p>Vilniaus raj.  LT-14247</p>
          <p><a href="tel:+37062176494">+37062176494</a></p>
          <p><a href="mailto:info@logway1.lt">info@logway1.lt</a></p>
        </div>
        <WorkingHours />
        <Map />
      </div>
  )
}

export default CompanyInfo;
