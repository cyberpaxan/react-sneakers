import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import axios from 'axios';

function App() {
    const [cartOpened, setCartOpened] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        axios
            .get('https://63a71d9b59fd83b1bb3eb432.mockapi.io/items')
            .then((res) => setItems(res.data));

        axios
            .get('https://63a71d9b59fd83b1bb3eb432.mockapi.io/cart')
            .then((res) => setCartItems(res.data));
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://63a71d9b59fd83b1bb3eb432.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://63a71d9b59fd83b1bb3eb432.mockapi.io/cart/${id}`);
        setCartItems((item) => item.filter((item) => item.id !== id));
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className='wrapper clear'>
            {cartOpened && (
                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                    onRemove={onRemoveItem}
                />
            )}
            <Header onClickCart={() => setCartOpened(true)} />

            <div className='content p-40'>
                <div className=' d-flex align-center justify-between mb-40'>
                    <h1>
                        {searchValue
                            ? `Поиск по запросу: "${searchValue}"`
                            : 'Все кроссовки'}
                    </h1>
                    <div className='search-block d-flex'>
                        <img src='/img/search.svg' alt='Search' />
                        {searchValue && (
                            <img
                                onClick={() => setSearchValue('')}
                                className='clear cu-p'
                                src='/img/btn-remove.svg'
                                alt='Clear'
                            />
                        )}
                        <input
                            onChange={onChangeSearchInput}
                            value={searchValue}
                            placeholder='Поиск...'
                        />
                    </div>
                </div>
                <div className='sneakers d-flex flex-wrap ml-30 mr-10'>
                    {items
                        .filter((item) =>
                            item.title
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onPlus={() => onAddToCart(item)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
