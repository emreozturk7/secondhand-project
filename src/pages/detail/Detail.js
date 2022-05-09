import React from 'react';
import Header from '../../components/Header/Header';
import '../style/detail.css';
import Deneme from './Deneme.png';

function Detail() {
  return (
    <>
      <Header />
      <div className='detail-wrapper'>
        <div className='detail-container'>
          <div className='detail-image'>
            <img src={Deneme} alt="" />
          </div>
          <div className='detail-info-container'>
            <div className='detail-title'>Beli Uzun Trençkot Kareli</div>
            <div className='main-container'>
              <div className='container'>
                <div className='title'>Marka: </div>
                <div className='name'>Lusi Viton</div>
              </div>
              <div className='container'>
                <div className='title'>Renk: </div>
                <div className='name'>Bej Rengi</div>
              </div>
              <div className='container'>
                <div className='title'>Kullanım Durumu: </div>
                <div className='name'>Az Kullanılmış</div>
              </div>
            </div>
            <div className='price'>319.90 TL</div>
            <div className='button-container'>
              <button className='buy-button'>Satın Al</button>
              <button className='offer-button'>Teklif Ver</button>
            </div>

            <div className='explanation'>Açıklama</div>
            <div className='pharagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quasi, eos ipsum impedit magnam cupiditate maxime nihil debitis fugit eaque voluptates voluptatibus dolorem expedita temporibus praesentium suscipit. Perferendis, dolorum? Animi.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;