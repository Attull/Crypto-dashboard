import React, { useContext, useEffect, useState } from 'react'
import "./Home.css"
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {

   const {coins , currency} =  useContext(CoinContext)
   const [input, setInput] = useState("")
    const [displayCoin, setDisplayCoin] =  useState([])

   const inputHandler = (val) =>{
       setInput(val)
       if(val == ""){
        setDisplayCoin(coins)
       }
   }

   const searchHandler = (e)=>{
        e.preventDefault()
        const filterCoins = coins.filter((item) =>{
            return item.name.toUpperCase().includes(input.toUpperCase())
        })

        setDisplayCoin(filterCoins)

   }

   useEffect(()=>{
        setDisplayCoin(coins)
   },[coins])

    return (
        <div className='home'>
            <div className="hero">
                <h1>Largest <br /> Crypto Marketplace</h1>
                <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
                <form onSubmit={(e)=> searchHandler(e)}>
                    <input type='text' placeholder='Search crypto...' onChange={(e)=> inputHandler(e.target.value)}/>
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
                        displayCoin.map((coin)=>{
                            return (
                                <Link to={`coin/${coin.id}`}>
                                  <tr>
                                    <td>{coin.name}</td>
                                    <td><img src={coin.image} height="100"/></td>
                                    <td>{currency.symbol + coin.current_price.toFixed(2)}</td>
                                    <td>{coin.price_change_24h}</td>
                                    <td>{coin.market_cap}</td>
                                </tr>
                                </Link>
                              
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Home