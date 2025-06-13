import { useId } from 'react';
import './input.css'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId()
  return (
    <div className='main-container'>
      <div className='first'>
        <label htmlFor={amountInputId} className='label'>
          {label}
        </label>
        <input
          id={amountInputId}
          className='input'
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // && to check if user has defined amount or not
        />
      </div>
      <div className='second'>
        <p className='text'>Currency Type</p>
        <select
          className='select'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
