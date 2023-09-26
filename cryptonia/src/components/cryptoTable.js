import React, { useState, useEffect } from 'react';
import "../Styles/cryptoTable.css";
import axios from "axios"
import Coin from './Coin';



function CryptoTable() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en')
        .then(res => {
            setCoins(res.data);
        })
        .catch(error => alert(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
        );

    return(

        <div className='coin-table'>
            
            {filteredCoins.map(coin => {
                return(
                    <Coin 
                    key={coin.id} 
                    name= {coin.name} 
                    image={coin.image}
                    symbol= {coin.symbol}
                    marketcap = {coin.market_cap}
                    price = {coin.current_price}
                    priceChange= {coin.price_change_percentage_24h}
                    volume = {coin.total_volume}
                    />
                )
            })}

        </div>



    );

}

export default CryptoTable;