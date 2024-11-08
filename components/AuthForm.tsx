"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Loader2 } from 'lucide-react'
import { authformSchema } from '@/lib/utils'
import CustomFormInputs from './CustomFormInputs'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'
import PlaidLink from './PlaidLink'
import { useTheme } from 'next-themes'

const AuthForm = ({type}: {type:string}) => {
    const [user,setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const formSchema = authformSchema(type);
    const { setTheme } = useTheme();
  const { theme, resolvedTheme } = useTheme(); 
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);
    
    
    const router = useRouter();
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
            defaultValues: {
            email: "",
            password: "",

        },
    })
    
    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof formSchema>) =>{
        setIsLoading(true);

        console.log(data);
        try {
            //! Sign up with Appwrite & create plaid token
            
            if(type === 'sign-up')
            {
                const userData = {
                    firstName: data.firstName!,
                    lastName: data.lastName!,
                    address1: data.address1!,
                    state: data.state!,
                    city: data.city!,
                    postalCode: data.postalCode!,
                    dateOfBirth: data.dateOfBirth!,
                    ssn: data.ssn!,
                    email: data.email,
                    password: data.password
                  }
                const newUser = await signUp(userData);
                setUser(newUser);

            }
            if(type === 'sign-in')
            {
                const response = await signIn({
                    email:data.email,
                    password:data.password
                })
                if(response)
                {
                    router.push('/dashboard');
                }
            }
        } catch (error) {
           console.log(error); 
        }finally{
            setIsLoading(false);
        }
        
    }
    useEffect(() => {
        setIsDarkTheme(resolvedTheme === 'dark');
      }, [resolvedTheme]);
    
      if (isDarkTheme === null) {
        return <div>Loading...</div>; 
      }
  return (
    <section className='auth-form'>
        <header className="flex flex-col gap-5 md:gap-8">
            <Link href="/" className=' cursor-pointer flex items-center gap-2'>
                <Image
                    src='/icons/logo.svg'
                    width={34}
                    height={34}
                    alt="bankon logo"
                />
                <h1 className='text-26'>bank<span className='text-26 text-[#FF7E61]'>on</span></h1>
            </Link>
            <div className="flex flex-col gap-1 md:gap-3">
                <h1 className='text-24 font-semibold text-gray-900 lg:text-36'>
                    {user
                    ? 'Link Account'
                    : type === 'sign-in'
                    ? 'Sign In'
                    : 'Sign Up'
                }
                <p className='text-16 font-normal text-gray-600 dark:text-gray-300'>
                    {user 
                        ? 'Link your account to get started'
                        : 'Please enter your details'
                    }
                </p>
                </h1>
            </div>
        </header>
        {user ? (
            <div className="flex flex-col gap-4">
                <PlaidLink user={user} variant='primary'/>
            </div>
         ) : (
            <>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {type === 'sign-up' && (
                            <>
                            <div className="flex gap-4">
                                <CustomFormInputs control={form.control} name='firstName' label="First Name" placeholder='Enter your first name'/>
                                <CustomFormInputs control={form.control} name='lastName' label="Last Name" placeholder='Enter your last name'/>
                            </div>
                                
                                <CustomFormInputs control={form.control} name='address1' label="Address" placeholder='Enter your specific address'/>
                                <CustomFormInputs control={form.control} name='city' label="City" placeholder='Enter your city'/>
                            <div className="flex gap-4">
                                <CustomFormInputs control={form.control} name='state' label="State" placeholder='Example: ON'/>
                                <CustomFormInputs control={form.control} name='postalCode' label="Postal Code" placeholder='Example: M3A'/>
                            </div>
                            <div className="flex gap-4">
                                <CustomFormInputs control={form.control} name='dateOfBirth' label="Date of Birth" placeholder='yyyy-mm-dd'/>
                                <CustomFormInputs control={form.control} name='ssn' label="SSN" placeholder='ex: 1234'/>
                            </div>    
                                
                            </>
                        )} 
                            <CustomFormInputs control={form.control} name='email' label="Email" placeholder='Enter your email'/>
                            <CustomFormInputs control={form.control} name='password' label="Password" placeholder='Enter your password'/>
                        
                        
                        <div className="flex flex-col gap-4">
                            <Button type="submit" className='form-btn' disabled={isLoading}>
                                {isLoading ? ( 
                                    <>
                                        <Loader2 size={20} className='animate-spin mr-2'/> 
                                        Loading...
                                    </>
                                ) : type === 'sign-in' 
                                    ? 'Sign In' : 'Sign Up'}
                            </Button>
                        </div>
                        
                    </form>
                </Form>
                <footer className="flex justify-center gap-1">
                    <p className='text-14 font-normal text-gray-600 dark:text-gray-300'>{type === 'sign-in' ? "Don't have an account?" : 'Already have an account?'}</p>
                    <Link className='form-link font-semibold' href={type==='sign-in' ? '/sign-up' : '/sign-in'}>{type==='sign-in' ? 'Sign Up' : 'Login'}</Link>
                </footer>
            </>
        )}
    </section>
  )
}

export default AuthForm

