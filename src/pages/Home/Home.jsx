import React, { useContext, useEffect, useState } from 'react'
import "./Home.css"
import { CoinContext } from '../../context/CoinContext'

const Home = () => {

   const coins =  useContext(CoinContext)
   
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