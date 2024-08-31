import { PlaidLinkProps } from '@/types';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState<string>('');
  const [ready, setReady] = useState<boolean>(false);

  const { setTheme } = useTheme();
  const { theme, resolvedTheme } = useTheme(); 
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);
    
  useEffect(() => {
    setIsDarkTheme(resolvedTheme === 'dark');

    const getLinkToken = async () => {
        try {
            const data = await createLinkToken(user);
            console.log('Received Link Token:', data?.linkToken);
            setToken(data?.linkToken);
        } catch (error) {
            console.error('Error retrieving link token:', error);
        }
    };

    getLinkToken();
}, [resolvedTheme, user]);

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

// Update readiness state based on Plaid Link readiness
useEffect(() => {
    setReady(plaidReady);
    console.log('Plaid Link Ready:', plaidReady);
}, [plaidReady]);

if (isDarkTheme === null) {
    return <div>Loading...</div>;
}

  return (
    <>
      {variant === 'primary' ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect bank
        </Button>
      ) : variant === 'ghost' ? (
        <Button onClick={() => open()} variant="ghost" className="plaidlink-ghost">
          <Image 
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className='hiddenl text-[16px] font-semibold text-black-2 xl:block'>Connect bank</p>
        </Button>
      ) : (
        <Button onClick={() => open()} className="plaidlink-default">
          <Image 
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
            className='brightness-[1] invert-[0.7]'
          />
          <p className='text-[16px] sidebar-label font-semibold text-black-2 dark:text-[#aeaeae]'>Connect bank</p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
