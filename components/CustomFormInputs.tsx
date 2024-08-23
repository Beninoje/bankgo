"use client"
import React, { useState } from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { CustomFormInputProps } from '@/types'
import { authformSchema } from '@/lib/utils'
import Image from 'next/image'

const CustomFormInputs = ({control, name, placeholder, label}:CustomFormInputProps) => {
    const formSchema = authformSchema('sign-up');
    const [viewPassword, setViewPassword] = useState(false);

    const togglePasswordView = () => {
        console.log("pressed")
        setViewPassword((prev)=> !prev);
    }
    return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
                <div className="flex w-full flex-col">
                    <FormControl className='flex gap-2 items-center'>
                        <div className="relative">
                            <Input placeholder={placeholder} className='input-class' {...field} type={name === 'password' && !viewPassword ? 'password' : 'text'}/>
                            {name === 'password' && (
                                <div className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2" onClick={togglePasswordView} >
                                    <Image src={viewPassword ? "/icons/eye-close.svg" : "/icons/eye-open.svg"} width={20} height={20} alt="eye-open"/>
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