import React,{useContext} from 'react'
import ListMinus from './ListMinus'
import ListPlus from './ListPlus'
import { GlobalContext } from '../Context/GlobalState'
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const ifEmpty = transactions.length==0?"hidden":"";
  const size = transactions.length==0?"1/2":"1/3"
  return (
    <div className={`sm:${ifEmpty} flex flex-col md:flex-1/3 md:w-full items-start justify-center mt-10 w-80 md:flex-2 md:h-full md:justify-start`}>
        <h3 className='font-bold pl-4 md:text-xl'>History</h3>
        <ul className="list-none pl-6 pr-2 mt-4 w-full overflow-y-auto sm:max-h-20 rounded-md md:max-h-72">
          {transactions.map(transaction =>
            <ListMinus key={transaction.id} id={transaction.id} text={transaction.text} amount={transaction.amount}/>)}
        </ul>
    </div>
  )
}

export default TransactionList