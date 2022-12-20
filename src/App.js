function App() {
    return (
        <div className='wrapper clear'>
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
                <h1 className='mb-40'>Все кроссовки</h1>
                <div className='sneakers d-flex'>
                    <div className='card'>
                        <img
                            width={133}
                            height={112}
                            src='/img/sneakers/1.jpg'
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
