import React from 'react';
import Header from '../../components/Header/Header';

function Detail() {
  return (
    <>
      <Header />
      <div className='detail-wrapper'>
        <div className='detail-container'>
          <div className='detail-image'>Resim</div>
          <div className='detail-info-container'>
            <div className='detail-title'>
              <div className='container'>
                <div className='title'></div>
                <div className='name'></div>
              </div>
              <div className='container'>
                <div className='title'></div>
                <div className='name'></div>
              </div>
              <div className='container'>
                <div className='title'></div>
                <div className='name'></div>
              </div>
              <div className='price'></div>
              <div className='button-container'>
                <button>Satın Al</button>
                <button>Teklif Ver</button>
              </div>

              <div className='explanation'></div>
              <div className='pharagraph'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;