import React, { useEffect, useState } from 'react'
import "./Home.css"

const Home = () => {

    const [coins, setCoins] = useState([])

    const fetchData = () => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr';
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-EeGCqbYnsNBT4sVXmF1thEBs' }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setCoins(json))
            .catch(err => console.error('error:' + err));
    }

    useEffect(()=>{
        fetchData()
    },[])
   
    return (
        <div className='home'>
            <div className="hero">
                <h1>Largest <br /> Crypto Marketplace</h1>
                <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
                <form>
                    <input type='text' placeholder='Search crypto...' />
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className="crypto-table">
                <table>
                    <tr>
                        <th>#</th>
                        <th>Coins</th>
                        <th>Price</th>
                        <th>24H Change</th>
                        <th>Market Cap</th>
                    </tr>
                    {
                        coins.map((coin)=>{
                            return (
                                <tr>
                                    <td>{coin.name}</td>
                                    <td><img src={coin.image} height="100"/></td>
                                    <td>{coin.current_price.toFixed(2)}</td>
                                    <td>{coin.price_change_24h}</td>
                                    <td>{coin.market_cap}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Home