import React from 'react'
import { ReactDOM } from 'react'
import Home_Nav from './Home_Nav';
import Restaurant from './Restaurant'
import Restaurant_card from './Restaurant_card'
import './Restaurant_card.css';

export default function Review_Body(){
    return(
        <div>
            <Home_Nav />
        <div className='reviewbody'>
            <Restaurant />
        </div>
        </div>
    )
}
