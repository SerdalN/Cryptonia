import React, { Component } from 'react';
import '../Styles/Footer.css';
import { FaDiscord, FaTwitter, FaFacebookF,FaPinterestP } from "react-icons/fa"


function Footer() {


    return(

          <div className='footer--content'>
            <div>
            <div className='footer--icons'>
                <a href='https://twitter.com/?lang=de' target="_blank"><FaTwitter/></a>
                <a href='https://discord.com/' target="_blank"><FaDiscord/></a>
                <a href='https://facebook.com' target="_blank"><FaFacebookF/></a>
                <a href='https://pinterest.com' target="_blank"><FaPinterestP/></a>
            </div>
            <div className='footer--policy'>
                <a href='/'>Privacy</a>
                <a href='/'>Terms of Use</a>
            </div>
            </div>
            
          </div>
    )
}


export default Footer;