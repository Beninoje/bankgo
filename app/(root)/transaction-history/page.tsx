import MobileNav from '@/components/MobileNav'
import SideBar from '@/components/SideBar'
import TransactionHeaderBox from '@/components/TransactionHeaderBox'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import RecentTransactions from '@/components/RecentTransactions'
import { SearchParamProps } from '@/types'
import TransactionsTable from '@/components/TransactionsTable'

const TransactionHistory = async ({ searchParams: {id, page }}: SearchParamProps) => {

  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  });
  
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account  = await getAccount({ appwriteItemId });

  console.log({
    accountsData,
    account
  });
  

  if(!loggedIn) redirect('/sign-in');

  if(!accounts) return;

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
              <div className="transactions">
                <div className="transactions-header">
                  <TransactionHeaderBox 
                    title="Transaction History"
                    subtext="See your bank details and transactions."
                  />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select an account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              <div className="">
                <TransactionsTable transactions={account?.transactions}/>
              </div>
              </div>
          </div>
    </section>
    
  
  )
}

export default TransactionHistory