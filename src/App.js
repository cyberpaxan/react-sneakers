function App() {
    return (
        <div className='wrapper clear'>
            <div className='overlay'>
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
            <div className='content p-40'>
                <div className=' d-flex align-center justify-between mb-40'>
                    <h1>Все кроссовки</h1>
                    <div className='search-block d-flex'>
                        <img src='/img/search.svg' alt='Search' />
                        <input placeholder='Поиск...' />
                    </div>
                </div>
                <div className='sneakers d-flex'>
                    <div className='card'>
                        <div className='favorite'>
                            <img src='/img/unliked.svg' alt='Unliked' />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src='/img/sneakers/1.jpg'
                            alt='pic'
                        />
                        <h5>Мужские кроссовки Nike Blazer Mid</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Цена:</span>
                                <b>12 990 руб.</b>
                            </div>

                            <button className='button'>
                                <img
                                    width={11}
                                    height={11}
                                    src='/img/plus.svg'
                                    alt='pic'
                                />
                            </button>
                        </div>
                    </div>
                    <div className='card'>
                        <img
                            width={133}
                            height={112}
                            src='/img/sneakers/2.jpg'
                            alt='pic'
                        />
                        <h5>Мужские кроссовки Nike Blazer Mid </h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Цена:</span>
                                <b>12 990 руб.</b>
                            </div>

                            <button className='button'>
                                <img
                                    width={11}
                                    height={11}
                                    src='/img/plus.svg'
                                    alt='pic'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
