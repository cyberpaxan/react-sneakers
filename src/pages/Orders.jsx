import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import AppContext from '../context';

function Orders() {
    const { onAddToFavorite, onAddToCart, isItemAdded } =
        React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    'https://63a71d9b59fd83b1bb3eb432.mockapi.io/orders'
                );
                setOrders(
                    data.reduce((prev, obj) => [...prev, ...obj.items], [])
                );
                setIsLoading(false);
            } catch (error) {
                alert('ошибка!');
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            <div className='content p-40'>
                <div className=' d-flex align-center justify-between mb-40'>
                    <h1>Мои заказы</h1>
                </div>
                <div className='sneakers d-flex flex-wrap ml-30 mr-10'>
                    {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                        <Card key={index} loading={isLoading} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Orders;
