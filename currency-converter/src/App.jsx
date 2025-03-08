import React from 'react'
import axios from "axios"

const App = () => {
  let getApi = async()=>{
  let response =  await axios.get('http://localhost:3000/')
  console.log(response.data)
  }
  
  return (
    <div>
      <button onClick={getApi}>onclick</button>
      <h1>Currency Converter</h1>
      <div>
      <input type="text" className='bg-black text-white' placeholder='amount'/>
        <p>From</p>
        <select>
        <option value='USD'>US Dollar</option>
        <option value='EUR'>Euro</option>
        <option value='GBP'>British Pound</option>
        <option value='AFN'>Afghan Afghani</option>
        <option value='AUD'>Australian Dollar</option>
        <option value='CAD'>Canadian Dollar</option>
        <option value='BDT'>Bangladeshi Taka</option>
        <option value='INR'>Indian Rupee</option>
        <option value='SAR'>Saudi Riyal</option>
        <option value='AED'>UAE Dirham</option>
        <option value='CNY'>Chinese Yuan</option>
        <option value='JPY'>Japanese Yen</option>
        <option value='TRY'>TRY</option>
        <option value='KWD'>KWD</option>
        <option value='QAR'>QAR</option>
        <option value='CHF'>CHF</option>
        <option value='MYR'>MYR</option>
        <option value='RUB'>RUB</option>
        <option value='KRW'>KRW</option>
        <option value='EGP'>EGP</option>
        <option value='BRL'>BRL</option>
        <option value='IDR'>IDR</option>
        <option value='ZAR'>ZAR</option>
        <option value='MXN'>MXN</option>
        <option value='THB'>THB</option>
        <option value='VND'>VND</option>
        <option value='OMR'>OMR</option>
      </select>
      <p>to</p>
      <select>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='GBP'>GBP</option>
        <option value='AFN'>AFN</option>
        <option value='AUD'>AUD</option>
        <option value='CAD'>CAD</option>
        <option value='BDT'>BDT</option>
        <option value='INR'>INR</option>
        <option value='SAR'>SAR</option>
        <option value='AED'>AED</option>
        <option value='CNY'>CNY</option>
        <option value='JPY'>JPY</option>
        <option value='TRY'>TRY</option>
        <option value='KWD'>KWD</option>
        <option value='QAR'>QAR</option>
        <option value='CHF'>CHF</option>
        <option value='MYR'>MYR</option>
        <option value='RUB'>RUB</option>
        <option value='KRW'>KRW</option>
        <option value='EGP'>EGP</option>
        <option value='BRL'>BRL</option>
        <option value='IDR'>IDR</option>
        <option value='ZAR'>ZAR</option>
        <option value='MXN'>MXN</option>
        <option value='THB'>THB</option>
        <option value='VND'>VND</option>
        <option value='OMR'>OMR</option>
      </select>
      <button>Convert</button>
      </div>
      
     
      
     
    </div>
  )
}

export default App
