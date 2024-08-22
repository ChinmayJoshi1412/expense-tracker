import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction=>transaction.amount);
  const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);

  return (
    <div className='flex flex-col items-start justify-center md:justify-start md:h-full'>
        <h4 className='font-bold md:text-2xl'>Your Balance</h4>
        <h1 id="balance" className='text-5xl font-bold md:text-8xl'>₹{total}</h1>
    </div>
  )
}

export default Balance