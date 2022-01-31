import React from 'react';
import './bestProduct.scss'
import besBg from './../../assets/img/bes-bg@2x.png'
import boxImg1 from './../../assets/img/best-image-01.png'
import boxImg2 from './../../assets/img/best-image-02.png'
import boxImg3 from './../../assets/img/best-image-03.png'
import iconImg1 from './../../assets/img/producticon-01.png'
import iconImg2 from './../../assets/img/producticon-02.png'
import iconImg3 from './../../assets/img/producticon-03.png'
import goIcon from './../../assets/img/go-icon.png'

const BestProduct = () => {
    return (
        <div className='best-product' style={{
            background: `url(${besBg})`,
            backgroundSize: "cover"
        }}
        >

            <div className="container">
                <div className="best-product_content">
                    <div className="best-product_content-header">
                        <h1>Best Product</h1>
                        <p>How to create mobile-optimized videos in minutes. Not a designer,
                            every team makes a lot of videos Can be trimmed. Take the first </p>
                    </div>
                    <div className="best-product_content-box">
                        <div className="row">
                            <div className="box-item col-4">
                                <img src={boxImg1} alt="" />
                                <div className="box-item-icon">
                                    <img src={iconImg1} alt='iconImg' className='box-item-icon-img' />

                                </div>
                                <div className="box-item-content">
                                    <p className='box-item-content-text'>How to create mobile-optimized</p>
                                    <img src={goIcon} alt="goIcon" />
                                </div>
                            </div>
                            <div className="box-item col-4">
                                <img src={boxImg2} alt="" />
                                <div className="box-item-icon">
                                    <img src={iconImg2} alt='iconImg' className='box-item-icon-img' />
                                </div>
                                <div className="box-item-content">
                                    <p className='box-item-content-text'>How to create mobile-optimized</p>
                                    <img src={goIcon} alt="goIcon" />
                                </div>
                            </div>
                            <div className="box-item col-4">
                                <img src={boxImg3} alt="" />
                                <div className="box-item-icon">
                                    <img src={iconImg3} alt='iconImg' className='box-item-icon-img' />
                                </div>
                                <div className="box-item-content">
                                    <p className='box-item-content-text'>How to create mobile-optimized</p>
                                    <img src={goIcon} alt="goIcon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BestProduct;
