import React from 'react';
import AppContext from '../context';

const Info = ({ image, title, description }) => {
    const { setCartOpened } = React.useContext(AppContext);
    return (
        <div>
            <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
                <img width={120} height={120} src={image} alt='Empty' />
                <h2>{title}</h2>
                <p className='opacity-6'>{description}</p>
                <button
                    className='greenButton'
                    onClick={() => setCartOpened(false)}
                >
                    <img src='/img/arrow.svg' alt='Arrow' />
                    Вернуться назад
                </button>
            </div>
        </div>
    );
};

export default Info;
