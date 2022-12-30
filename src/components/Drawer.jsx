import React from 'react';

function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <h2 className='d-flex justify-between '>
                    Корзина
                    <img
                        onClick={onClose}
                        className='removeBtn cu-p'
                        src='/img/btn-remove.svg'
                        alt='Close'
                    />
                </h2>

                {items.length > 0 ? (
                    <>
                        <div className='items'>
                            {items.map((obj) => (
                                <div className='cartItem d-flex align-center'>
                                    <img
                                        className='mr-15'
                                        width={95}
                                        height={80}
                                        src={`${obj.imageUrl}`}
                                        alt='Sneakers'
                                    />
                                    <div className='mr-20'>
                                        <p className='mb-5'>{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className='removeBtn'
                                        src='/img/btn-remove.svg'
                                        alt='Remove'
                                    />
                                </div>
                            ))}
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
                    </>
                ) : (
                    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
                        <img
                            className='mb-20'
                            width={120}
                            height={120}
                            src='/img/empty-cart.jpg'
                            alt='Empty'
                        />
                        <h2>Корзина пустая!</h2>
                        <p className='opacity-6'>
                            Добавьте хотя бы одну пару кроссовок, чтобы сделать
                            заказ.
                        </p>
                        <button className='greenButton'>
                            <img src='/img/arrow.svg' alt='Arrow' />
                            Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Drawer;
