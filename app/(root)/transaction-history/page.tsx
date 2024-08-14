import SideBar from '@/components/SideBar'
import React from 'react'

const TransactionHistory = () => {
  const loggedIn = {firstName:'Beni', lastName:'Noje', email: 'beninoje@gmail.com'}
  return (
    <div className="flex">
        <SideBar user={loggedIn}/>
        TransactionHistory
    </div>
    
  
  )
}

export default TransactionHistory