import { Transaction, TransactionTableProps } from '@/types'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from '@/lib/utils'
import CategoryBadge from './CategoryBadge'

  
const TransactionsTable = ({transactions}:TransactionTableProps) => {
  return (
    <Table>
    <TableHeader className="bg-[#f9fafb] dark:bg-[#22222E]">
        <TableRow>
          <TableHead className="px-2 dark:text-[#AEAEAE]">Transaction</TableHead>
          <TableHead className="px-2 dark:text-[#AEAEAE]">Amount</TableHead>
          <TableHead className="px-2 dark:text-[#AEAEAE]">Status</TableHead>
          <TableHead className="px-2 dark:text-[#AEAEAE]">Date</TableHead>
          <TableHead className="px-2 max-md:hidden dark:text-[#AEAEAE]">Channel</TableHead>
          <TableHead className="px-2 max-md:hidden dark:text-[#AEAEAE]">Category</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {transactions.map((t:Transaction) => {
            const status = getTransactionStatus(new Date(t.date))
            const amount = formatAmount(t.amount)
            const isDebit = t.type === 'debit';
            const isCredit = t.type === 'credit';
            console.log(`Transaction name: ${t.name}`)
            return (
                <TableRow key={t.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#FFFBFA] dark:bg-[#313143]' : 'bg-[#F6FEF9] dark:bg-[#434352]'} !hover:bg-none dark:border-[#3B3B45] !border-b-DEFAULT`}>
                    <TableCell className="max-w-[250px] pl-2 pr-10">
                        <div className="flex items-center gap-3">
                            <h1 className='text-14 truncate font-semibold text-[#344054] dark:text-[#AEAEAE]'>
                                {removeSpecialCharacters(t.name)}
                            </h1>
                        </div>
                    </TableCell>
                    <TableCell className={`pl-2 pr-10 font-semibold ${
                        isDebit || amount[0] === '-' ?
                        'text-[#f04438]'
                        : 'text-[#039855]'
                    }`}>
                        {isDebit ? `- ${amount}` : `+ ${isCredit}` ? amount : amount}
                    </TableCell>
                    <TableCell className="pl-2 pr-10 ">
                        <CategoryBadge category={status} /> 
                    </TableCell>

                    <TableCell className="min-w-32 pl-2 pr-10 dark:text-[#AEAEAE]">
                        {formatDateTime(new Date(t.date)).dateTime}
                    </TableCell>

                    <TableCell className="pl-2 pr-10 capitalize min-w-24 dark:text-[#AEAEAE]">
                        {t.paymentChannel}
                    </TableCell>
                    <TableCell className="pl-2 pr-10 max-md:hidden ">
                        <CategoryBadge category={t.category} /> 
                    </TableCell>
                </TableRow>
            )
        })}
    </TableBody>
    </Table>

  )
}

export default TransactionsTable