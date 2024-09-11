import React, { useContext } from 'react'
import "./Coin.css"
import { CoinContext } from '../../context/CoinContext'


const Coin = () => {

  const val = useContext(CoinContext)

  console.log(val)
  return (
    <div>Coin</div>
  )
}

export default Coin