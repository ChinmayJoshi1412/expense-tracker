import React from 'react'
import Header from './Components/Header'
import MainContainer from './Components/MainContainer'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState'
import Body from './Components/Body'
const App = () => {
  return (
    <GlobalProvider>
      <div className='flex flex-col h-screen items-start justify-start mb-10'>
        <Header/>
        <Body/>
      </div>
    </GlobalProvider>
  )
}

export default App