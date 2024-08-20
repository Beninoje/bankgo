
"use client";

import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem,
} from "@/components/ui/select";
import { formUrlQuery } from "@/lib/utils";
import { Account, SelectTransactionBoxProps } from '@/types';
import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const SelectTransactionBox = ({
    accounts,
    appwriteItemId,
}: SelectTransactionBoxProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleBankChange = (value: string) => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "id",
            value: value,
        });
        router.push(newUrl, { scroll: false });
    };

    return (
        <Select onValueChange={handleBankChange} >
            <SelectTrigger className="w-[200px] flex gap-3" >
                <Image src="/icons/card.svg" width={20} height={20} alt="credit card"/>
                <SelectValue placeholder="Select an account" />
            </SelectTrigger>
            <SelectContent className="bg-[#fff]">
                {accounts.map((account: Account) => (
                    <SelectItem key={account.appwriteItemId} value={account.appwriteItemId}>
                        {account.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SelectTransactionBox;
