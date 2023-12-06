/* eslint-disable jsx-a11y/alt-text */
import preloader from '../../assets/images/Preloader.gif';
import React from "react";
import "./Preloader.css";


const Preloader = (props) => {
    return (
        <div className='preloader'>
          <p>
          Loading
          </p>
          <img src={preloader}/>
        </div>
    )
}

export default Preloader;