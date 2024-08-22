import React, {useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

const AddTransaction = () => {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState('0')
    const {addTransaction} = useContext(GlobalContext);
  const {transactions} = useContext(GlobalContext);
  const size = transactions.length==0?"1/2":"1/3"
  const margin = transactions.length==0?"ml-auto":""
    const onSubmit = (e)=>{
      e.preventDefault();
      const newTransaction = {
        id: Math.floor(Math.random() * 10000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction);
    }
  return (
    <div className={`flex flex-col md:flex-1/3 md:w-full items-start justify-center mt-10 w-72 space-y-4 md:text-xl md:${margin}`}>
        <h3 className="font-bold">Add new transaction</h3>
        <form onSubmit={onSubmit} className='space-y-4 font-semibold'>
        <div className='flex flex-col space-y-1'>
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value = {text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." className='w-full bg-slate-200 rounded p-3'/>
        </div>
        <div className='flex flex-col space-y-1'>
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" value = {amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." className='w-full bg-slate-200 rounded p-3'/>
        </div>
        <button type='submit' className="text-center w-full bg-slate-800 rounded-xl p-4 text-white">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction