import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import '../style/detail.css';
import axios from '../../constants/axios';

function Detail() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
    console.log(product);
  }, []);


  const getData = () => {
    (
      async () => {
        setLoading(true);
        await axios.get('https://bootcamp.akbolat.net/products/' + sessionStorage.getItem('product_id'))
          .then(res => {
            setLoading(false);
            setProduct(res.data);
          }).catch(err => {
            setLoading(false);
            console.log('Hata: ', err);
          });
      }
    )();
  };

  return (
    <>
      <Header />
      <>
        {
          loading
            ?
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            :
            <div className='detail-wrapper'>
              <div className='detail-container'>
                <div className='detail-image-container'>
                  <img src={'https://bootcamp.akbolat.net/' + product.image?.url} alt="" className='detail-image'/>
                </div>
                <div className='detail-info-container'>
                  <div className='detail-main-title'>{product.name}</div>
                  <div className='main-container'>
                    <div className='container'>
                      <div className='detail-title'>Marka: </div>
                      <div className='detail-name'>{product.brand}</div>
                    </div>
                    <div className='container'>
                      <div className='detail-title'>Renk: </div>
                      <div className='detail-name'>{product.color}</div>
                    </div>
                    <div className='container'>
                      <div className='detail-title'>Kullanım Durumu: </div>
                      <div className='detail-name'>{product.status}</div>
                    </div>
                  </div>
                  <div className='detail-price'>{product.price} TL</div>
                  <div className='detail-button-container'>
                    <button className='detail-buy-button'>Satın Al</button>
                    <button className='detail-offer-button'>Teklif Ver</button>
                  </div>

                  <div className='detail-explanation'>Açıklama</div>
                  <div className='detail-pharagraph'>{product.description}</div>
                </div>
              </div>
            </div>
        }
      </>
    </>
  );
}

export default Detail;