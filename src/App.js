import React, {  useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [amount, setAmount] = useState();
  const [c1, setC1] = useState("USD");
  const [c2, setC2] = useState("INR");
  const [printData ,setPrintData]=useState();


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '664fb817dbmsh8baffa9b0a1656dp1815dbjsn13047ffc3470',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
  };
  
  fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${c1}&to=${c2}&q=1.0`, options)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.error(err));


  const eventhandle=(e)=>{
    e.preventDefault();
  }

  const submit=()=>{
    setPrintData(amount*data)
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Currency Converter</h1>
        <form onSubmit={eventhandle}>

        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <select name="" id="from" value={c1} onChange={(e) => setC1(e.target.value)}>
      <option value="AED">AED</option>
			<option value="ARS">ARS</option>
			<option value="AUD">AUD</option>
			<option value="BGN">BGN</option>
			<option value="BRL">BRL</option>
			<option value="BSD">BSD</option>
			<option value="CAD">CAD</option>
			<option value="CHF">CHF</option>
			<option value="CLP">CLP</option>
			<option value="CNY">CNY</option>
			<option value="COP">COP</option>
			<option value="CZK">CZK</option>
			<option value="DKK">DKK</option>
			<option value="DOP">DOP</option>
			<option value="EGP">EGP</option>
			<option value="EUR">EUR</option>
			<option value="FJD">FJD</option>
			<option value="GBP">GBP</option>
			<option value="GTQ">GTQ</option>
			<option value="HKD">HKD</option>
			<option value="HRK">HRK</option>
			<option value="HUF">HUF</option>
			<option value="IDR">IDR</option>
			<option value="ILS">ILS</option>
			<option value="INR" >INR</option>
			<option value="ISK">ISK</option>
			<option value="JPY">JPY</option>
			<option value="KRW">KRW</option>
			<option value="KZT">KZT</option>
			<option value="MXN">MXN</option>
			<option value="MYR">MYR</option>
			<option value="NOK">NOK</option>
			<option value="NZD">NZD</option>
			<option value="PAB">PAB</option>
			<option value="PEN">PEN</option>
			<option value="PHP">PHP</option>
			<option value="PKR">PKR</option>
			<option value="PLN">PLN</option>
			<option value="PYG">PYG</option>
			<option value="RON">RON</option>
			<option value="RUB">RUB</option>
			<option value="SAR">SAR</option>
			<option value="SEK">SEK</option>
			<option value="SGD">SGD</option>
			<option value="THB">THB</option>
			<option value="TRY">TRY</option>
			<option value="TWD">TWD</option>
			<option value="UAH">UAH</option>
			<option value="USD">USD</option>
			<option value="UYU">UYU</option>
			<option value="VND">VND</option>
			<option value="ZAR">ZAR</option>
        </select>
        <select name="" id="to" value={c2} onChange={(e) => setC2(e.target.value)}>
          <option value="AED">AED</option>
			<option value="ARS">ARS</option>
			<option value="AUD">AUD</option>
			<option value="BGN">BGN</option>
			<option value="BRL">BRL</option>
			<option value="BSD">BSD</option>
			<option value="CAD">CAD</option>
			<option value="CHF">CHF</option>
			<option value="CLP">CLP</option>
			<option value="CNY">CNY</option>
			<option value="COP">COP</option>
			<option value="CZK">CZK</option>
			<option value="DKK">DKK</option>
			<option value="DOP">DOP</option>
			<option value="EGP">EGP</option>
			<option value="EUR">EUR</option>
			<option value="FJD">FJD</option>
			<option value="GBP">GBP</option>
			<option value="GTQ">GTQ</option>
			<option value="HKD">HKD</option>
			<option value="HRK">HRK</option>
			<option value="HUF">HUF</option>
			<option value="IDR">IDR</option>
			<option value="ILS">ILS</option>
			<option value="INR">INR</option>
			<option value="ISK">ISK</option>
			<option value="JPY">JPY</option>
			<option value="KRW">KRW</option>
			<option value="KZT">KZT</option>
			<option value="MXN">MXN</option>
			<option value="MYR">MYR</option>
			<option value="NOK">NOK</option>
			<option value="NZD">NZD</option>
			<option value="PAB">PAB</option>
			<option value="PEN">PEN</option>
			<option value="PHP">PHP</option>
			<option value="PKR">PKR</option>
			<option value="PLN">PLN</option>
			<option value="PYG">PYG</option>
			<option value="RON">RON</option>
			<option value="RUB">RUB</option>
			<option value="SAR">SAR</option>
			<option value="SEK">SEK</option>
			<option value="SGD">SGD</option>
			<option value="THB">THB</option>
			<option value="TRY">TRY</option>
			<option value="TWD">TWD</option>
			<option value="UAH">UAH</option>
			<option value="USD">USD</option>
			<option value="UYU">UYU</option>
			<option value="VND">VND</option>
			<option value="ZAR">ZAR</option>
        </select>
        <input type="submit" value="Convert Me" onClick={submit} />
        </form>

        <div className="results">
          <div id="result">{printData}</div>
          <input id="symbol" type="text" value={c2} disabled />
        </div>
      </div>
    </>
  );
}

export default App;
