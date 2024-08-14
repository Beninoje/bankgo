import SideBar from '@/components/SideBar'
import React from 'react'

const MyBanks = () => {
    const loggedIn = {firstName:'Beni', lastName:'Noje', email: 'beninoje@gmail.com'}
  return (
    <div className="flex">
        <SideBar user={loggedIn}/>
        MyBanks
    </div>
    
  )
}

export default MyBanks