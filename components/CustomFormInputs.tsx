"use client"
import React, { useEffect, useState } from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { CustomFormInputProps } from '@/types'
import { authformSchema } from '@/lib/utils'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const CustomFormInputs = ({control, name, placeholder, label}:CustomFormInputProps) => {
    const formSchema = authformSchema('sign-up');
    const [viewPassword, setViewPassword] = useState(false);

    const togglePasswordView = () => {
        console.log("pressed")
        setViewPassword((prev)=> !prev);
    }
    const { setTheme } = useTheme();
  const { theme, resolvedTheme } = useTheme(); 
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);
    useEffect(() => {
        setIsDarkTheme(resolvedTheme === 'dark');
      }, [resolvedTheme]);
    
      if (isDarkTheme === null) {
        return <div>Loading...</div>; 
      }
    return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label dark:text-gray-300'>
                    {label}
                </FormLabel>
                <div className="flex w-full flex-col">
                    <FormControl className='flex gap-2 items-center'>
                        <div className="relative">
                            <Input placeholder={placeholder} className='input-class dark:text-gray-300 ' {...field} type={name === 'password' && !viewPassword ? 'password' : 'text'}/>
                            {name === 'password' && (
                                <div className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2" onClick={togglePasswordView} >
                                    <Image src={
                                        isDarkTheme
                                            ? viewPassword
                                            ? "/icons/eye-close_dark.svg"
                                            : "/icons/eye-open_dark.svg"
                                            : viewPassword
                                            ? "/icons/eye-close.svg"
                                            : "/icons/eye-open.svg"
                                        }  width={20} height={20} alt="eye-open"/>
                                </div>
                            )}
                            
                        </div>
                        
                        
                    </FormControl>
                    <FormMessage className='form-message mt-4'/>
                </div>
            </div>
        )}
        />
  )
}

export default CustomFormInputs