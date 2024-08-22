import React, {useContext} from 'react'
import Balance from './Balance'
import IncExp from './IncExp'
import { GlobalContext } from '../Context/GlobalState'
const MainContainer = () => {
  const {transactions} = useContext(GlobalContext);
  const size = transactions.length==0?"1/2":"1/3"
  return (
    <div className={`flex flex-col md:flex-${size} md:w-full items-start justify-center mt-10 w-72`}>
        <Balance/>
        <IncExp/>
      </div>
  )
}

export default MainContainer