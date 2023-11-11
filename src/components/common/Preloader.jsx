import preloader from '../../assets/img/Preloader.gif';
import React from "react";

const Preloader = (props) => {
    return (
        <div>
            Loading...<img src={preloader}/>
        </div>
    )
}

export default Preloader;