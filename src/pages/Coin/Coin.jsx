import React, { useContext, useEffect, useState } from 'react'
import "./Coin.css"
import { CoinContext } from '../../context/CoinContext'
import { useParams } from 'react-router'


const Coin = () => {

  const [coin, setCoin] = useState([])
  const {currency}  = useContext(CoinContext)

  const {coinId} = useParams()

  
  const fetchData = () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&ids=${coinId}`;
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-EeGCqbYnsNBT4sVXmF1thEBs' }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => setCoin(json))
        .catch(err => console.error('error:' + err));
}

  useEffect(()=>{
      fetchData()
  },[currency])

  return (
    <div className='coin-parent'>
       <div className='coin-row'>
          <p>Crypto Market Rank</p>
          <p>{coin[0]?.market_cap_rank}</p>
       </div>
       <div className='coin-row'>
          <p>Current Price</p>
          <p>{currency.symbol + coin[0]?.current_price}</p>
       </div>
       <div className='coin-row'>
          <p>Market cap</p>
          <p>{currency.symbol + coin[0]?.market_cap}</p>
       </div>
       <div className='coin-row'>
          <p>24 Hour high</p>
          <p>{currency.symbol + coin[0]?.high_24h}</p>
       </div>
       <div className='coin-row'>
          <p>24 Hour low</p>
          <p>{currency.symbol + coin[0]?.low_24h}</p>
       </div>
    </div>
  )
}

export default Coin