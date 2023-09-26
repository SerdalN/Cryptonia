import React, { Component } from 'react';
import '../Styles/SellingPoint.css';

function Sellingpoint()  {

    return(
                <div className='main--container'>
                    <h2 className='why--header'>WHY <span>CHOOSE US</span></h2>
                    <div className='main--container--content'>
                        <div className='left--container'>
                            <div className='left--card'>
                                <h2>CONNECT YOUR WALLET</h2>
                                <p>Use Trust Wallet, Metamask or to connect to the app.</p>
                            </div>
                            <div className='left--card'>
                                <h2>SELECT YOUR QUANTITY</h2>
                                <p>Upload your crypto and set a title, description and price.</p>
                            </div>
                            <div className='left--card'>
                                <h2>CONFIRM TRANSACTION</h2>
                                <p>Earn by selling your crypto on our marketplace.</p>
                            </div>
                        </div>
                        <div className='middle--container'><img src='../assets/img/holding-coin.png' alt='Hand holding a Bitcoin' className='Why--Img'></img></div>
                        <div className='right--container'>
                            <div className='right--card'>
                                <h2>RECEIVE YOUR OWN NFTS</h2>
                                <p>Invest all your crypto at one place on one platform.</p>
                            </div>
                            <div className='right--card'>
                                <h2>TAKE A MARKET TO SELL</h2>
                                <p>Discover, collect the right crypto collections to buy or sell.</p>
                            </div>
                            <div className='right--card'>
                                <h2>DRIVE YOUR COLLECTION</h2>
                                <p>We make it easy to Discover, Invest and manage.</p>
                            </div>
                        </div>
                    </div>
                </div>


    )
}

export default Sellingpoint