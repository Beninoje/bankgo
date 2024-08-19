import MobileNav from '@/components/MobileNav'
import SideBar from '@/components/SideBar'
import Image from 'next/image'
import React from 'react'

const PaymentTransfer = () => {
  const loggedIn = {firstName:'Beni', lastName:'Noje', email: 'beninoje@gmail.com'}
  return (
    <section className="flex flex-col">
      <div className="flex size-full flex-col">
              <div className="root-layout">
                <Image src='/icons/logo.svg' width={30} height={30} alt="logo" />
                <div className="">
                  <MobileNav user={loggedIn}/>
                </div>
              </div>
          </div>
          <div className="flex">
              <SideBar user={loggedIn}/>
                Payment Transfer
          </div>
    </section>
    
  
  )
}

export default PaymentTransfer