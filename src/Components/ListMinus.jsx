import React from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { useContext } from 'react';
const ListMinus = ({id,text,amount}) => {
  const {deleteTransaction} = useContext(GlobalContext);
  const sign = amount<0?"-":"+";
  const color = amount<0?"red-600":"green-600";
  return (
  <li className={`flex relative justify-between items-center p-2 w-full bg-slate-200 rounded-r-md mt-2 border-r-8 border-r-${color} hover:bg-slate-300 transition-colors duration-300`}>
    <span>{text}</span>
    <span className='ml-auto'>{sign}</span>₹<span>{Math.abs(amount)}</span>
    <button className="absolute left-0 transform -translate-x-full bg-red-500 text-white p-2 rounded-l-md opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out group-hover:translate-x-0" onClick={()=>deleteTransaction(id)}>
      X
    </button>
  </li>
  )
}

export default ListMinus