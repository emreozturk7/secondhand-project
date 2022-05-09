import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import '../style/add-product.css';
import Select from 'react-select';
import { useAuth } from '../../contexts/AuthContext';

function AddProduct() {

  const [selectedOption, setSelectedOption] = useState(null);

  const { categories, brands, colors, usingStatus } = useAuth();
  return (
    <>
      <Header />
      <div className='add-product-container'>
        <div className='product-detail'>
          <div className='large-title'>Ürün Detayları</div>
          <div className='title'>Ürün Adı</div>
          <input type="text" />

          <div className='title'>Açıklama</div>
          <input type="text" />

          <div className='input-wrapper'>

            <div className='input-container'>
              <div className='title'>Kategori</div>
              <div>{
              }</div>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={categories}
              />
            </div>

            <div className='input-container'>
              <div className='title'>Marka</div>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={brands}
              />
            </div>

          </div>

          <div className='input-wrapper'>

            <div className='input-container'>
              <div className='title'>Renk</div>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={colors}
              />
            </div>

            <div className='input-container'>
              <div className='title'>Kullanım Durumu</div>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={usingStatus}
              />
            </div>

          </div>

          <div className='title'>Fiyat</div>
          <input type="text" />
          <div className='option'>
            <div className='option-text'>Teklif Opsiyonu</div>
          </div>

        </div>
        <div className='add-product-image'>
          <div className='large-title'>Ürün Görseli</div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;