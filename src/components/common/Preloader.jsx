import preloader from '../../assets/images/Preloader.gif';
import React from "react";

const Preloader = (props) => {
    return (
        <div>
            Loading...<img src={preloader}/>
        </div>
    )
}

export default Preloader;