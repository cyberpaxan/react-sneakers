import React from 'react';
import Card from '../components/Card';

function Favorites({ items, onAddToFavorite }) {
    return (
        <div>
            <div className='content p-40'>
                <div className=' d-flex align-center justify-between mb-40'>
                    <h1>Мои закладки</h1>
                </div>
                <div className='sneakers d-flex flex-wrap ml-30 mr-10'>
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Favorites;
