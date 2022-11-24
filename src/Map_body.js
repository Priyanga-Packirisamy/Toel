import React from 'react'
import './Map_body.css'

export default function Map_body() {
    return (
        <div>
        <div className="map">
        <img src='maps.jpg' className='mapimg'/>
        <form className="hi">

      <button className="btn">DOWNLOAD OFFLINE MAPS</button>

    </form>
    <form className="bt">
    <button>RESTAURANTS</button>
    <button>HOTELS</button>
    <button>THINGS TO DO</button>
    <button>MUSEUMS</button>
    <button>ATM'S</button>
    </form>
    </div>
        </div>
    )
}


