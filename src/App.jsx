import React from 'react';
import Home from './pages/Home';
import Drawer from './components/Drawer';
import Header from './components/Header';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';

function App() {
    const [cartOpened, setCartOpened] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [favorites, setFavorites] = React.useState([]);

    React.useEffect(() => {
        axios
            .get('https://63a71d9b59fd83b1bb3eb432.mockapi.io/items')
            .then((res) => setItems(res.data));

        axios
            .get('https://63a71d9b59fd83b1bb3eb432.mockapi.io/cart')
            .then((res) => setCartItems(res.data));

        axios
            .get('https://63a71d9b59fd83b1bb3eb432.mockapi.io/favorites')
            .then((res) => setFavorites(res.data));
    }, []);

    const onAddToCart = (obj) => {
        // axios.post('https://63a71d9b59fd83b1bb3eb432.mockapi.io/cart', obj);
        // setCartItems((prev) => [...prev, obj]);

        if (cartItems.find((obj) => obj.id === obj.id)) {
            axios.delete(
                `https://63a71d9b59fd83b1bb3eb432.mockapi.io/cart/${obj.id}`
            );
            setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
        } else {
            axios.post('https://63a71d9b59fd83b1bb3eb432.mockapi.io/cart', obj);
            setCartItems((prev) => [...prev, obj]);
        }
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://63a71d9b59fd83b1bb3eb432.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onAddToFavorite = (obj) => {
        if (favorites.find((obj) => obj.id === obj.id)) {
            axios.delete(
                `https://63a71d9b59fd83b1bb3eb432.mockapi.io/favorites/${obj.id}`
            );
            setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
        } else {
            axios.post(
                'https://63a71d9b59fd83b1bb3eb432.mockapi.io/favorites',
                obj
            );
            setFavorites((prev) => [...prev, obj]);
        }
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

            <Routes>
                <Route
                    path='/'
                    element={
                        <Home
                            items={items}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onAddToCart={onAddToCart}
                        />
                    }
                ></Route>
                <Route
                    path='/favorites'
                    exact
                    element={
                        <Favorites
                            items={favorites}
                            onAddToFavorite={onAddToFavorite}
                        />
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
