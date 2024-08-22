import React from 'react'
import MainContainer from './MainContainer'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
const Body = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-full md:justify-center md:space-x-10 md:px-20 w-full items-center md:items-start md:mt-20">
        <MainContainer/>
        <TransactionList/>
        <AddTransaction/>
    </div>
  )
}

export default Body