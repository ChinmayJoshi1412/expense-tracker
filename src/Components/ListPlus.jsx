import React from 'react'

const ListPlus = () => {
  return ( 
  <li className="flex relative justify-between items-center p-2 w-full bg-slate-200 rounded-r-md mt-2 border-r-8 border-r-green-600 hover:bg-slate-300 transition-colors duration-300">
  <span>Cash</span>
  <span>400</span>
  <button className="absolute left-0 transform -translate-x-full bg-red-500 text-white p-2 rounded-l-md opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out group-hover:translate-x-0">
    X
  </button>
</li>
  )
}

export default ListPlus