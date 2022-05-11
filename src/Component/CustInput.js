import React,{useState} from 'react'

function CustInput  () {
    const [value,setValue]=useState('');

    const removeDollarSign = (value)=>(value[0]==='?' ? value.slice(1):value)
    const getReturnValue = (value)=> (value === '' ? '' : `$${value}`)

    const handleChange = (ev) =>{
        ev.preventDefault()
        const inputtedValue = ev.currentTarget.value
        const noDollarSign =  removeDollarSign(inputtedValue)
        if(isNaN(noDollarSign))return 
        setValue(getReturnValue(noDollarSign))
    }
  return (
    <input value={value} aria-labelledby="username-label" onChange={handleChange} />
  )
}
export default CustInput;