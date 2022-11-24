import React from 'react'
import "./Home_Body.css"
import {Link} from "react-router-dom";
function Home_Body() {
  return (
    <div className="body-home">
            <div className='offlinemap'>
            <Link to="/map"><img src="./map1.png" height="280px" width="210"/></Link>
            <h3 className='desc'>Offline Map</h3>
            </div>
            <div className='review'>
            <Link to="/review"><img src="./review.jpg" height="280px" width="210"/></Link>
            <h3 className='desc'>Review</h3>
            </div>
            <div className='calc'>
            <Link to="/calculator"><img src="./calc2.png" height="280px" width="210"/></Link>
            <h3 className='desc'>Convertor</h3>
            </div>
            <div className='lang'>
            <Link to="/language"><img src="./lang.jpg" height="280px" width="210"/></Link>
            <h3 className='desc'>Lang Help</h3>
            </div>
            <div className='info'>
            <Link to="/info"><img src="./rules.jpg" height="280px" width="210"/></Link>
            <h3 className='desc'>Information</h3>
            </div>
    </div>
  )
}

export default Home_Body
