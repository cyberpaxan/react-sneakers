import React from 'react';

const Header = () => {
    return (
        <div>
            <header className='d-flex justify-between align-center p-40'>
                <div className='d-flex align-center'>
                    <img width={40} height={40} src='/img/logo.png' alt='pic' />
                    <div className='headerInfo'>
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <p className='opacity-5'>Магазин лучших кроссовок</p>
                    </div>
                </div>

                <ul className='d-flex'>
                    <li className='mr-30'>
                        <img
                            width={18}
                            height={18}
                            src='/img/cart.svg'
                            alt='pic'
                        />
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img
                            width={18}
                            height={18}
                            src='/img/user.svg'
                            alt='pic'
                        />
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Header;
