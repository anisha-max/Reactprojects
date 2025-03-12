import React from 'react'

function InuputBox(
    lable,
    amount,
    currencyOptions,
    amountDisable = false,
    currencyDisabled = false,
    onAmountChange,
    onCurrencyChange ,
    selectCurrency 
) {
    return (
        <div className='bg-black w-full w-max-md '>
            <lable className='text-xl'>{lable}</lable>
            <div className='flex justify-between'>
                <input className='py-3 px-3 '
                    type='number'
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />

                <select value={selectCurrency} disabled={currencyDisabled} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {currencyOptions.map((currency) => {
                        <option key={currency} value={currency}>{currency}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default InuputBox
