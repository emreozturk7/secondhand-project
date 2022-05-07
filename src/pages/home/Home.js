import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import axios from '../../constants/axios';
import { useProduct } from '../../contexts/ProductContext';
import '../style/home.css';
import Banner1 from './Banner1.jpg';


function Home() {

  const { products, setProducts } = useProduct();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const menuItems = ['Hepsi', 'Pantolon', 'Gömlek', 'Tişört', 'Şort', 'Sweatshirt', 'Kazak', 'Polar', 'Mont', 'Abiye', 'Ayakkabı', 'Aksesuar', 'Çanta', 'Triko', 'Diğer'];



  useEffect(() => {
    (async () => {
      setError(null);
      setLoading(true);
      await axios.get('https://bootcamp.akbolat.net/products')
        .then(res => {
          setLoading(false);
          setProducts(res.data);
        }).catch(err => {
          setLoading(false);
          setError(err);
          console.log('Hata: ', error);
        });
    })();
  }, []);


  return (
    <>
      <Header />
      <div id="home-container" >
        <img src={Banner1} alt="" className='poster' />
        <div className="category-container">
          <ul>
            {
              menuItems.map(item => (
                <li key={item}>{item} <hr /></li>
              ))
            }
          </ul>
        </div>
        {
          loading
            ?
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            :
            <div className="product-container">
              {
                products.map(product => (
                  <ProductCard key={product.id} item={product}></ProductCard>
                ))
              }
            </div>
        }
      </div>
    </>
  );
}

const ProductCard = ({ item }) => {
  return (
    <div className="container">
      <div className="product-container">
        <div className="product-card">
          {
            <figure>
              <img className="card-images" alt={item.name} src={item.image} />
              <figcaption>{item.name}</figcaption>
            </figure>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;