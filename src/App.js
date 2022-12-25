import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
    const [cartOpened, setCartOpened] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch('https://63a71d9b59fd83b1bb3eb432.mockapi.io/items')
            .then((res) => res.json())
            .then((json) => setItems(json));
    }, []);

    const onAddToCart = (obj) => {
        setCartItems((prev) => [...prev, obj]);
    };

    return (
        <div className='wrapper clear'>
            {cartOpened && (
                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                />
            )}
            <Header onClickCart={() => setCartOpened(true)} />

            <div className='content p-40'>
                <div className=' d-flex align-center justify-between mb-40'>
                    <h1>Все кроссовки</h1>
                    <div className='search-block d-flex'>
                        <img src='/img/search.svg' alt='Search' />
                        <input placeholder='Поиск...' />
                    </div>
                </div>
                <div className='sneakers d-flex flex-wrap ml-30 mr-10'>
                    {items.map((item) => (
                        <Card
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
