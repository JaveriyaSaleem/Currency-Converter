import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
const port = 3000
const currencies = [
  { name: 'US Dollar', code: 'USD', "PKR/USD": 0.0036, "USD/PKR": 280.50 },
  { name: 'Euro', code: 'EUR', "PKR/EUR": 0.0032, "EUR/PKR": 310.75 },
  { name: 'British Pound', code: 'GBP', "PKR/GBP": 0.0027, "GBP/PKR": 368.90 },
  { name: 'Afghan Afghani', code: 'AFN', "PKR/AFN": 0.26, "AFN/PKR": 3.86 },
  { name: 'Australian Dollar', code: 'AUD', "PKR/AUD": 0.0057, "AUD/PKR": 175.50 },
  { name: 'Canadian Dollar', code: 'CAD', "PKR/CAD": 0.0049, "CAD/PKR": 204.70 },
  { name: 'Bangladeshi Taka', code: 'BDT', "PKR/BDT": 0.43, "BDT/PKR": 2.30 },
  { name: 'Indian Rupee', code: 'INR', "PKR/INR": 0.30, "INR/PKR": 3.33 },
  { name: 'Saudi Riyal', code: 'SAR', "PKR/SAR": 0.013, "SAR/PKR": 76.95 },
  { name: 'UAE Dirham', code: 'AED', "PKR/AED": 0.013, "AED/PKR": 77.25 },
  { name: 'Chinese Yuan', code: 'CNY', "PKR/CNY": 0.026, "CNY/PKR": 38.95 },
  { name: 'Japanese Yen', code: 'JPY', "PKR/JPY": 0.55, "JPY/PKR": 1.82 },
  { name: 'Turkish Lira', code: 'TRY', "PKR/TRY": 0.11, "TRY/PKR": 9.25 },
  { name: 'Kuwaiti Dinar', code: 'KWD', "PKR/KWD": 0.0011, "KWD/PKR": 913.00 },
  { name: 'Qatari Riyal', code: 'QAR', "PKR/QAR": 0.013, "QAR/PKR": 76.50 },
  { name: 'Swiss Franc', code: 'CHF', "PKR/CHF": 0.0038, "CHF/PKR": 260.90 },
  { name: 'Malaysian Ringgit', code: 'MYR', "PKR/MYR": 0.016, "MYR/PKR": 62.80 },
  { name: 'Russian Ruble', code: 'RUB', "PKR/RUB": 0.33, "RUB/PKR": 3.05 },
  { name: 'South Korean Won', code: 'KRW', "PKR/KRW": 4.20, "KRW/PKR": 0.24 },
  { name: 'Egyptian Pound', code: 'EGP', "PKR/EGP": 0.17, "EGP/PKR": 5.88 },
  { name: 'Brazilian Real', code: 'BRL', "PKR/BRL": 0.018, "BRL/PKR": 56.00 },
  { name: 'Indonesian Rupiah', code: 'IDR', "PKR/IDR": 55.50, "IDR/PKR": 0.018 },
  { name: 'South African Rand', code: 'ZAR', "PKR/ZAR": 0.19, "ZAR/PKR": 5.20 },
  { name: 'Mexican Peso', code: 'MXN', "PKR/MXN": 0.063, "MXN/PKR": 15.85 },
  { name: 'Thai Baht', code: 'THB', "PKR/THB": 0.12, "THB/PKR": 8.10 },
  { name: 'Vietnamese Dong', code: 'VND', "PKR/VND": 86.00, "VND/PKR": 0.012 },
  { name: 'Omani Rial', code: 'OMR', "PKR/OMR": 0.0015, "OMR/PKR": 750.20 },
];
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// PKR/currency 
app.get('/currencies/:amount/:to',(req,res)=>{
  const {amount,to} = req.params;
  const currency = currencies.find(currency => currency.code === to)
  if(currency){
    let outcome = currency[`PKR/${to}`]

    res.json({result:amount*outcome})
  }
})
// currency/PKR 500 usd to PKR =
app.get('/currencyToPKR/:amount/:from',(req,res)=>{
  const {amount,from} = req.params;
  const currency = currencies.find(currency => currency.code === from)
  if(currency){
    let fromCurrency = currency[`${from}/PKR`]*amount
   res.json({message:`${amount} ${from}  to PKR is ${fromCurrency}`})
  }
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
