import React, { useState } from 'react';
import Button from './../../components/button/Button'
import Card from '../card/Card';
import './listProduct.scss'
import productImg from './../../assets/img/img-06.png'

const ListProduct = () => {

    const [itemImg, setItemImg] = useState(15)

    const arrayItem = (item) => {
        const array = [];
        for(let i = 0; i < item ; i++){
            array.push(i)
        }
        return array
    }

  return (
    <div className='list-product'>
        <div className="container">
            <div className="row">
                {
                    arrayItem(itemImg).map((item , index) => (
                        <div key={index} className="col-5 col-xl-25 col-sm-1">
                            <Card img={productImg} />
                        </div>
                    ))
                }
            </div>
            <div className="list-product-button" onClick={() => setItemImg(itemImg + 5)}>
                <Button />
            </div>
        </div>
    </div>    
  );
};

export default ListProduct;
