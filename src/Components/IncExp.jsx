import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const IncExp = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction=>transaction.amount);
  const incomes = amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const expense = amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0).toFixed(2); 
  return (
    <div className='flex flex-row w-full space-x-8 mt-5 bg-slate-200 rounded-lg p-6 items-center justify-center font-bold md:h-full'>
        <div className="flex flex-col items-center md:text-2xl">
            <h4>Income</h4>
            <p id="money-plus" className='text-green-600'>+₹{incomes}</p>
        </div>
        <div className="bg-slate-400 h-20 w-0.5 rounded"></div>
        <div className=" flex flex-col items-center  md:text-2xl">
            <h4>Expenses</h4>
            <p id="money-minus" className='text-red-600'>-₹{Math.abs(expense)}</p>
        </div>
    </div>
  )
}

export default IncExp