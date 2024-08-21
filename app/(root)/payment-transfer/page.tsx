import HeaderBox from '@/components/HeaderBox'
import MobileNav from '@/components/MobileNav'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import SideBar from '@/components/SideBar'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const PaymentTransfer = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
      userId: loggedIn.$id 
  });
  const accountsData = accounts?.data;

  if (!loggedIn) redirect('/sign-in');

  if (!accounts) return;
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
                <div className="payment-transfer">
                  <HeaderBox
                  title="Payment Transfer"
                  subtext='Please provide any spefic details or notes related to the payment transfer'
                  />
                  <div className="size-full pt-5">
                    <PaymentTransferForm accounts={accountsData}/>
                  </div>
                </div>
                
          </div>
    </section>
    
  
  )
}

export default PaymentTransfer