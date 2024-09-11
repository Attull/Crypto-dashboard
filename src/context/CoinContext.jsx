import { createContext, useEffect, useState } from "react"


export const CoinContext = createContext()

const CoinContextProvider = (props)=>{

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
        <CoinContext.Provider value={coins}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider

