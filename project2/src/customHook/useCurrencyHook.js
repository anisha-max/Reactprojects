import { useEffect, useState } from "react"


function useCurrencyHook(currency) {
    const [data , setData] = useState([])
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => { console.log(error) })
    }, [currency])
    return data
}

export default useCurrencyHook
