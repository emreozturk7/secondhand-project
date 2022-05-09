import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import axios from '../../constants/axios';
import '../style/home.css';
import Banner from './banner.png';
import NoImage from './noimage.png';

function Home() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState('');

  const [filterItem, setFilterItem] = useState([]);

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

  const selectCategory = (select) => {
    setSelected(select);
    filteredItem(select);
  };

  const filteredItem = (item) => {
    const newItem = products.filter((newVal) => {
      return newVal.category?.name === item;
    });
    setFilterItem(newItem);
  };

  return (
    <>
      <Header />
      <div className='home-wrapper'>
        <div className='poster'>
          <img src={Banner} alt="" />

        </div>
        <div className="category-wrapper">
          <div className='category-container'>
            <div className='category-name' onClick={() => setSelected('')}>Hepsi</div>
            {
              category.map((item, id) => (
                <div key={id} className='category-name' onClick={() => selectCategory(item.name)}> {item.name} </div>
              ))
            }
          </div>
        </div>
        {
          loading
            ?
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            :
            <div className="product-container">
              {
                selected.length > 1
                  ?
                  filterItem.map(product => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                  ))
                  :
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
    <Link to={{ pathname: 'detail' }} className={'link-container'} onClick={() => { sessionStorage.setItem('product_id', JSON.stringify(product.id)); }}>
      <div className="products-card">
        {
          <>
            <div className='card-images-container'>
              {
                product.image?.formats?.medium?.url === undefined
                  ?
                  <img src={NoImage} />
                  :
                  <img src={'https://bootcamp.akbolat.net/' + product.image?.formats?.medium?.url} />
              }
            </div>

            <div className='card-info'>
              <div className='home-brand'>{product.brand}</div>
              <div className='home-color'>Renk: <span>{product.color}</span></div>
            </div>

            <div className='home-price'>{product.price} TL</div>
          </>
        }
      </div>
    </Link>
  );
};

export default Home;