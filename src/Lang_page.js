import React from 'react'
import Home_Nav from './Home_Nav'
import "./Lang_page.css"

export default function Lang_page() {
  return (
    <div className='main'>
        <div className='Nav'>
            <Home_Nav/>
        </div>
        <div className='language'>
          <h3 className='heading'>Language Help</h3>
          <div className='detect_lang'>
          <select name="detect_lang" id="detect_lang" >
                <option value={"detect"}>Detect_Language</option>
                <option value={"english"}>English</option>
                <option value={"french"}>French</option>
                <option value={"italian"}>Italian</option>
                <option value={"tamil"}>Tamil</option>
                <option value={"hindi"}>Hindi</option>
                <option value={"chinese"}>Chinese</option>
            </select>
          </div>
          <div className='trans_lang'>
          <select name="trans_lang" id="trans_lang" >
                <option value={"english"}>English</option>
                <option value={"french"}>French</option>
                <option value={"italian"}>Italian</option>
                <option value={"tamil"}>Tamil</option>
                <option value={"hindi"}>Hindi</option>
                <option value={"chinese"}>Chinese</option>
            </select>
          </div>
          <div className='input'>
            <textarea placeholder='Enter Text........' id="text" type ="textarea"></textarea>
          </div>
          <div className='output'>Translation</div>
        </div>
    </div>
  )
}
