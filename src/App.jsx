import { useState } from 'react'
import { InputBox } from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import './index.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  // all keys from api
  const options = Object.keys(currencyInfo)

  // swap btn functionality
  const swap = () => {
    // swaps usd & inr or wtv is input
    setFrom(to)
    setTo(from)
    // swaps values of usd & inr or wtv is input
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // find converted amount
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div
      className="main"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/7542641/pexels-photo-7542641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
      >
        <div className="sub">
          <div className="card">
            <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}>
              <div className="from">
                <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              <div className="divider">
                <button
                type="button"
                className="swap"
                onClick={swap}
                >
                  swap
                </button>
              </div>

              <div className="to">
                <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
                />
              </div>

              <button type="submit" className="btn">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
