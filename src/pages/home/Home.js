import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import axios from '../../constants/axios';
import '../style/home.css';
import Banner1 from './Banner1.jpg';


function Home() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
    getCategory();

  }, []);

  const getProducts = () => {
    (
      async () => {
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
      }
    )();
  };

  const getCategory = () => {
    (
      async () => {

        await axios.get('https://bootcamp.akbolat.net/categories')
          .then(res => {
            setCategory(res.data);
          }).catch(err => {
            console.log('Hata: ', err);
          });
      }
    )();
  };


  return (
    <>
      <Header />
      <div className='home-wrapper'>
        <div className='poster'>
          <img src={Banner1} alt="" className='poster-deneme' />

        </div>
        <div className="category-container">
          <ul>
            {
              category.map(item => (
                <li key={item}>{item.name} <hr /></li>
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
                  <ProductCard key={product.id} product={product}></ProductCard>
                ))
              }
            </div>
        }
      </div>
    </>
  );
}

const ProductCard = ({ product }) => {
  return (
    <div className="products-container">
      <div className="products-card">
        {
          <>
            <div className='card-images-container'>
              <img className="card-images" src={'https://bootcamp.akbolat.net/' + product.image?.url} />
            </div>

            <div className='card-info'>
              <div>{product.brand}</div>
              <div>{product.color}</div>
            </div>

            <div>{product.price} TL</div>
          </>
        }
      </div>
    </div>
  );
};

export default Home;