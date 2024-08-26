import { PlaidLinkProps } from '@/types';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import Image from 'next/image';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
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
    console.log('Plaid Link Ready:', plaidReady); 
  }, [plaidReady]);

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
          />
          <p className='text-[16px] sidebar-label font-semibold text-black-2'>Connect bank</p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
