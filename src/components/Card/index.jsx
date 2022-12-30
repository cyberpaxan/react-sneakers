import styles from './Card.module.scss';
import React from 'react';
function Card({ onFavorite, imageUrl, title, price, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.favorite} onClick={onClickFavorite}>
                    <img
                        src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
                        alt='Unliked'
                    />
                </div>
                <img width={133} height={112} src={imageUrl} alt='pic' />
                <h5>{title}</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                    </div>

                    <img
                        className={styles.plus}
                        onClick={onClickPlus}
                        width={25}
                        height={25}
                        src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'}
                        alt='pic'
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;
