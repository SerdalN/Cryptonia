import React, { Component } from 'react';
import '../Styles/LowerContent.css';


function lowerContent() {
    return(

                <div className='main--container join--container'>
                    <div className='lower--content--header'>
                        <img src='../assets/img/bitcoin-comic.png' alt='Bitcoin'></img>
                        <h2>JOIN US VIA <br/> 
                        <span>DISCORD</span>
                        </h2>
                        <img src='../assets/img/ethereum-comic.png' alt='Ethereum Coin'></img>
                        </div>
                    <div>
                        <p className='paragraph'>
                        Invest and manage all your crypto at one place.
                        </p>
                    
                    </div>
                    <div><button className='btn' ><a href='https://discord.com/' target="_blank">Join via Discord</a></button></div>
                </div>
    )
}


export default lowerContent;