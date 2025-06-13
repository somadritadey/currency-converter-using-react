import { useState, useEffect } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) // convert whatever result we got on fetching to json to make it readable
        .then((res) => setData(res[currency])) // wtv is current value of currency such as usd, that will be the value of result
    }, [currency]) // currency is a dependency as if we move from inr to usd, we'll have to callback

    return data
}

export default useCurrencyInfo
