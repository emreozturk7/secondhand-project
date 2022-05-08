import React from 'react';
import Header from '../../components/Header/Header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../style/my_account.css';
import AccountIcon from './AccountIcon.svg';

function MyAccount() {

  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('auth_token');
    window.location.href = '/';
  };
  return (
    <>
      <Header />
      <div className="email-wrapper">
        <div className="email-container">
          <div className="account-logo">
            <img alt="account-logo" src={AccountIcon}></img>
          </div>
          <div className="e-mail"> {localStorage.getItem('email')}</div>
        </div>
        <button id="logout-button" className="button-secondary" onClick={logout}>Çıkış Yap</button>
      </div>

      <div className="offers-tab">

        <Tabs defaultIndex={0}>

          <TabList>
            <Tab>Teklif Aldıklarım</Tab>
            <Tab>Teklif Verdiklerim</Tab>
          </TabList>

          <TabPanel>
            <ReceiveCard />
          </TabPanel>

          <TabPanel>
            <GiveCard />
          </TabPanel>

        </Tabs>
      </div>
    </>
  );
}


const ReceiveCard = () => {
  return (
    <div className="product-container">
      <div className="product-card">
        <div className="image">
          <img alt="itemimage" src=''></img>
        </div>
        <div className="top-info">
          <div className="product-title">Title</div>
        </div>
        <div className="product-price">Alınan Teklif: 119.90 TL</div>
      </div>
    </div>
  );
};

const GiveCard = () => {
  return (
    <div className="product-container">
      <div className="product-card">
        <div className="image">
          <img alt="itemimage" src=''></img>
        </div>
        <div className="top-info">
          <div className="product-title">Title</div>
        </div>
        <div className="product-price">Alınan Teklif: 119.90 TL</div>
      </div>
    </div>
  );
};

export default MyAccount;