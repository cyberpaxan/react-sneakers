function Card() {
    return (
        <div>
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
        </div>
    );
}

export default Card;
