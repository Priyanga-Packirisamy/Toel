import React,{useState} from 'react'
import "./Calc_body.css"
export default function Calc_Body() {
    const[from_cur ,setfrom_cur] =useState('from');
    const[to_cur,setto_cur] = useState('to');
    const[amt,setamt] = useState(0);
    const[output,setoutput] = useState(0);
    function convert()
    {
        if(from_cur==='inr' && to_cur==='euro')
        {
            setoutput(amt*0.0119);
        }
        if(from_cur==='inr' && to_cur==='usd')
        {
            setoutput(amt*0.0122);
        }
        if(from_cur==='inr' && to_cur==='inr')
        {
            setoutput(amt);
        }
        if(from_cur==='euro' && to_cur==='inr')
        {
            setoutput(amt*84.0916);
        }
        if(from_cur==='euro' && to_cur==='usd')
        {
            setoutput(amt*1.0293);
        }
        if(from_cur==='euro' && to_cur==='euro')
        {
            setoutput(amt);
        }
        if(from_cur==='usd' && to_cur==='usd')
        {
            setoutput(amt);
        }
        if(from_cur==='usd' && to_cur==='inr')
        {
            setoutput(amt*81.6876);
        }
        if(from_cur==='usd' && to_cur==='euro')
        {
            setoutput(amt*0.9714);
        }
        if(from_cur==='from' && to_cur==='to')
        {
            setoutput(0);
            setamt(0);
        }
    }
  return (
    <div className='Main'>
    <div className='calc'>
        <h2 className='heading'>Currency Converter</h2>
        <div className='amount'>
            <label>Amount</label>
            <input type={"number"} placeholder="Enter Amount" id="amt"onChange={e => setamt(e.target.value)}></input>
        </div>
        <div className='from'>
            {/* <h4>From</h4> */}
            <select name="From" id="from_input" onChange={e => setfrom_cur(e.target.value)} >
                <option value={"from"}>From</option>
                <option value={"inr"}>Inr</option>
                <option value={"euro"}>Euro</option>
                <option value={"usd"}>USD</option>
            </select>
        </div>
        <div className='to'>
        {/* <h4>To</h4> */}
            <select name="to" id="to_input" onChange={e => setto_cur(e.target.value)}>
                <option value={"to"}>To</option>
                <option value={"euro"}>Euro</option>
                <option value={"inr"}>Inr</option>
                <option value={"usd"}>USD</option>
            </select>
        </div>
        <div className='convert'>
            <button type='convert' id="convert_button" onClick={()=>{convert()}}>Convert</button>
        </div>
        <div className='display'>
        <p>Converted Amount</p>
            <p>{amt+" "+from_cur+" = "+output+" "+to_cur}</p>
        </div>
    </div>

    </div>
  )
}
