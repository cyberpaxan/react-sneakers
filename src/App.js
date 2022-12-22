import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
    return (
        <div className='wrapper clear'>
            <div style={{ display: 'none' }} className='overlay'>
                <Drawer />
            </div>

            <Header />

            <div className='content p-40'>
                <div className=' d-flex align-center justify-between mb-40'>
                    <h1>Все кроссовки</h1>
                    <div className='search-block d-flex'>
                        <img src='/img/search.svg' alt='Search' />
                        <input placeholder='Поиск...' />
                    </div>
                </div>
                <div className='sneakers d-flex'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
