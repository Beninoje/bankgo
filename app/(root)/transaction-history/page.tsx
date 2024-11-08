// TransactionHistory.tsx

import MobileNav from '@/components/MobileNav';
import SideBar from '@/components/SideBar';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

import { SearchParamProps } from '@/types';
import TransactionsTable from '@/components/TransactionsTable';
import SelectTransactionBox from '@/components/SelectTransactionBox';
import { formatAmount } from '@/lib/utils';
import HeaderBox from '@/components/HeaderBox';
import { Pagination } from '@/components/Pagination';


const TransactionHistory = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const currentPage = Number(page as string) || 1;
    
    const loggedIn = await getLoggedInUser();
    
    if (!loggedIn) redirect('/sign-in');

    const accounts = await getAccounts({ 
        userId: loggedIn.$id 
    });
    
    const accountsData = accounts?.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

    const account = await getAccount({ appwriteItemId });
    
    const rowsPerPage = 10;
    const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);
    
    const indexOfLastTransaction = currentPage * rowsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

    const currentTransactions = account?.transactions.slice(
        indexOfFirstTransaction, indexOfLastTransaction
    )
    

    if (!accounts) return;

    return (
        <section className="flex flex-col">
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src='/icons/logo.svg' width={30} height={30} alt="logo" />
                    <div className="">
                        <MobileNav user={loggedIn} />
                    </div>
                </div>
            </div>
            <div className="flex ">
                <SideBar user={loggedIn} />
                <div className="transactions dark:bg-[#1A1A23]">
                    <div className="transactions-header">
                        <HeaderBox 
                            title="Transaction History"
                            subtext="See your bank details and transactions."
                        />
                        <SelectTransactionBox
                            accounts={accountsData}
                            appwriteItemId={appwriteItemId}
                        />
                    </div>
                    <div className="transactions-account dark:bg-[#22222E] dark:border-none">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-18 font-bold text-white">{account?.data.name}</h2>
                            <p className="text-14 text-blue-25">
                                {account?.data.officialName}
                            </p>
                            <p className="text-14 font-semibold tracking-[1.1px] text-white">
                                ●●●● ●●●● ●●●● {account?.data.mask}
                            </p>
                        </div>
                        <div className='transactions-account-balance'>
                            <p className="text-14">Current balance</p>
                            <p className="text-24 text-center font-bold">{formatAmount(account?.data.currentBalance)}</p>
                        </div>
                    </div>
                    <div className="">
                        <TransactionsTable transactions={currentTransactions} />
                        {totalPages > 1 && (
                            <div className="my-4 w-full">
                                <Pagination totalPages={totalPages} page={currentPage} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransactionHistory;
