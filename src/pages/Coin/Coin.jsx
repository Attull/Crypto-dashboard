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
  },[])

  return (
    <div>{coin[0]?.name}</div>
  )
}

export default Coin