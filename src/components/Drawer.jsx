import React from 'react';

const Drawer = () => {
    return (
        <div>
            <div className='drawer'>
                <h2 className='d-flex justify-between '>
                    Корзина
                    <img
                        className='removeBtn cu-p'
                        src='/img/btn-remove.svg'
                        alt='Remove'
                    />
                </h2>

                <div className='items'>
                    <div className='cartItem d-flex align-center'>
                        <img
                            className='mr-15'
                            width={80}
                            height={80}
                            src='/img/sneakers/1.jpg'
                            alt='Sneakers'
                        />
                        <div className='mr-20'>
                            <p className='mb-5'>
                                Мужские кроссовки Nike Blazer Mid
                            </p>
                            <b>12 990 руб.</b>
                        </div>
                        <img
                            className='removeBtn'
                            src='/img/btn-remove.svg'
                            alt='Remove'
                        />
                    </div>

                    <div className='cartItem d-flex align-center'>
                        <img
                            className='mr-15'
                            width={80}
                            height={80}
                            src='/img/sneakers/1.jpg'
                            alt='Sneakers'
                        />
                        <div className='mr-20'>
                            <p className='mb-5'>
                                Мужские кроссовки Nike Blazer Mid 270
                            </p>
                            <b>12 990 руб.</b>
                        </div>
                        <img
                            className='removeBtn'
                            src='/img/btn-remove.svg'
                            alt='Remove'
                        />
                    </div>
                </div>
                <div className='cartTotalBlock'>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className='d-flex'>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className='greenButton'>
                        Оформить заказ
                        <img src='/img/arrow.svg' alt='Arrow' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
