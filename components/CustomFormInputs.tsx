import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { CustomFormInputProps } from '@/types'
import { authformSchema } from '@/lib/utils'

const CustomFormInputs = ({control, name, placeholder, label}:CustomFormInputProps) => {
    const formSchema = authformSchema('sign-up');
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
                    <FormControl>
                        <Input placeholder={placeholder} className='input-class' {...field} type={name === 'password' ? 'password' : 'text'}/>
                    </FormControl>
                    <FormMessage className='form-message mt-4'/>
                </div>
            </div>
        )}
        />
  )
}

export default CustomFormInputs