import SideBar from '@/components/SideBar'
import React from 'react'

const PaymentTransfer = () => {
  const loggedIn = {firstName:'Beni', lastName:'Noje', email: 'beninoje@gmail.com'}
  return (
    <div className="flex">
        <SideBar user={loggedIn}/>
        PaymentTransfer
    </div>
    
  
  )
}

export default PaymentTransfer