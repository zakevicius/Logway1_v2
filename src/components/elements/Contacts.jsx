import React from 'react';
import Worker from './Worker.jsx';
import workers from './workers.json';
import CompanyInfo from "./CompanyInfo.jsx";
import Logo from "./Logo.jsx";

const Contacts = () => {  
  return (
    <section className='contacts' id='contacts'>
      <h3><span className='red'>K</span>ontaktai</h3>
      <div className="workers">
        <Logo />
        {workers.map(worker => <Worker key={worker.name} worker={worker} />)}
      </div>
      <CompanyInfo />
    </section>
  )
}

export default Contacts;
