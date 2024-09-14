import React, { useContext, useEffect, useState } from 'react'
import { reverseString } from '../../commonFunction'
import { CoinContext } from '../../context/CoinContext'
import "./HistoryCoin.css"

const HistoryCoin = () => {

    const {currency} = useContext(CoinContext)
    const {name} = currency
    const [hData, setHdata] = useState({})
    const [datee, setDatee] = useState("")

    const fetchData = () => {
        const url = `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${reverseString(datee)}`;
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-EeGCqbYnsNBT4sVXmF1thEBs' }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setHdata(json))
            .catch(err => console.error('error:' + err));
    }

    useEffect(()=>{
        fetchData()
    },[datee])

    return (
       <div className='history-coin-parent'>
        <div className="history-coin">
            <input
                type="date"
                onChange={(e) => setDatee(e.target.value)}
                className="date-input"
            />
            <div className="coin-info">
                <h1 className="coin-name">{hData?.name}</h1>
                {datee && hData?.market_data?.current_price ? (
                    <h2 className="coin-price">
                        Price on {datee}: {hData.market_data.current_price[name]} {currency.symbol}
                    </h2>
                ) : (
                    <h2 className="no-data">Select the date</h2>
                )}
            </div>
        </div>
       </div>
    );
}

export default HistoryCoin