import React from "react";
import { ReactDOM } from "react";
import Restaurant_card from "./Restaurant_card";
import './Restaurant_card.css';

function Restaurant() {
  return (
    <div>
    <div className="restaurant">
        <Restaurant_card
            img="res2.webp"
            namee="Septime"
            rating= {4.9}
            ratingcount={492}
            />
        <Restaurant_card
            img="res3.webp"
            namee="Chez Casimir"
            rating={4.7}
            ratingcount={361}
            />
        <Restaurant_card
            img="res4.jpg"
            namee="Relais d'Entrecôte"
            rating={4.6}
            ratingcount={373}
            />
        <Restaurant_card
            img="res5.jpg"
            namee="Le Chateaubriand"
            rating={4.5}
            ratingcount={409}
            />
        <Restaurant_card
            img="res6.jpeg"
            namee=" Verjus"
            rating={4.5}
            ratingcount={341}
            />
        <Restaurant_card
            img="res7.webp"
            namee="Semilla"
            rating={4.4}
            ratingcount={295}
            />
        <Restaurant_card
            img="res8.webp"
            namee="L'Atelier de Joel"
            rating={4.1}
            ratingcount={389}
            />
        <Restaurant_card
            img="res9.jpg"
            namee="Les Papilles"
            rating={4.0}
            ratingcount={267}
            />
        <Restaurant_card
            img="res91.webp"
            namee="Breizh Café"
            rating={3.8}
            ratingcount={444}
            />
        <Restaurant_card
            img="res1.webp"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
            />
        </div>
        < hr/>
        <div className="shop">
        <Restaurant_card
            img="shop1.jpeg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="shop3.jpg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="shop5.jpeg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="shop6.jpg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="shop7.jpeg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="shop8.webp"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="shop9.webp"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="shop91.jpg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="shop92.jpg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="shop93.jpg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        </div>
        <div className="stay">
        <Restaurant_card
            img="hot1.webp"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="hot2.jpg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="hot3.jpg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="hot4.jpg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="hot5.jpg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="hot6.jpg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="hot7.jpg"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="hot8.webp"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="hot9.webp"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        <Restaurant_card
            img="hot91.webp"
            namee="Bistrot Paul Bert"
            rating={5}
            ratingcount={986}
        />
        </div>
    </div>
  )
}

export default Restaurant
