"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import BankCard from './BankCard'
import { CategoryCount, RightSidebarProps } from '@/types'
import { countTransactionCategories } from '@/lib/utils'
import { Category } from './Category'
import { useRouter } from 'next/navigation'
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'

const RightSideBar = ({user,transactions,banks}:RightSidebarProps) => {
    const categories: CategoryCount[] = countTransactionCategories(transactions);
    const router = useRouter();
  const [token, setToken] = useState<string>('');
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const getLinkToken = async () => {
      try {
        const data = await createLinkToken(user);
        console.log('Received Link Token:', data?.linkToken); // Debugging token
        setToken(data?.linkToken);
      } catch (error) {
        console.error('Error retrieving link token:', error);
      }
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    try {
      await exchangePublicToken({ publicToken: public_token, user });
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during public token exchange:', error);
    }
  }, [user]);

  const config: PlaidLinkOptions = {
    token,
    onSuccess
  };

  const { open, ready: plaidReady } = usePlaidLink(config);

  useEffect(() => {
    setReady(plaidReady); 
  }, [plaidReady]);
  return (
    <aside className='right-sidebar border-l dark:border-[#3B3B45]'>
        <section className="flex flex-col pb-8">
            <div className="profile-banner"/>
            <div className="profile">
                <div className="profile-img">
                    <span className='text-5xl font-bold text-[#FF7E61]'>{user.firstName[0]}</span>
                </div>
                <div className="profile-details">
                    <h1 className='profile-name'>
                        {user.firstName}
                    </h1>
                    <p className="profile-email dark:text-[#AEAEAE]">
                        {user.email}
                    </p>
                </div>
            </div>
        </section>
        <section className="banks">
            <div className="flex w-full justify-between">
                <h2 className="header-2">
                    My Banks
                </h2>
                <button onClick={() => open()} className='flex gap-2'>
                    <Image src="/icons/plus.svg" width={20} height={20} alt="plus"/>
                    <h2 className="text-14 font-semibold text-gray-600 dark:text-[#FF7E61]">
                        Add Bank
                    </h2>
                </button>
            </div>
            {banks?.length > 0 &&(
                <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
                    <div className="relative z-10">
                        <BankCard 
                            key={banks[0].$id}
                            account={banks[0]}
                            userName={`${user.firstName} ${user.lastName}`}
                            showBalance={false}
                        />
                    </div>
                    {banks[1] &&(
                        <div className="absolute right-0 top-8 z-0 w-[90%]">
                            <BankCard
                                key={banks[1].$id}
                                account={banks[1]}
                                userName={`${user.firstName} ${user.lastName}`}
                                showBalance={false}
                            />
                        </div>
                    )}
                </div>
            )}
            <div className="mt-10 flex flex-1 flex-col gap-6">
                <h2 className='header-2'>Top Categories</h2>
                <div className="space-y-5">
                    {categories.map((category,index)=>(
                        <Category key={category.name} category={category}/>
                    ))}
                </div>
            </div>
        </section>
    </aside>
  )
}

export default RightSideBar