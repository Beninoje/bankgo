import React from 'react'
import Image from 'next/image';
const Banks = () => {
  return (
    <div className="grid grid-cols-4 place-items-center banks_landing_container items-center p-32">
        <div className="col-span-1">
          <Image src="/icons/chase_logo.svg" alt="chase logo" width={150} height={150} className='banks_landing_logo'/>
        </div>
        <div className="col-span-1">
          <Image src="/icons/wells_fargo_logo.svg" alt="wells fargo logo" width={150} height={150} className='banks_landing_logo'/>
        </div>
        <div className="col-span-1">
          <Image src="/icons/bank_of_america_logo.svg" alt="bank of america logo" width={150} height={150} className='banks_landing_logo'/>
        </div>
        <div className="col-span-1">
          <Image src="/icons/td_bank_logo.svg" alt="td bank logo" width={150} height={150} className='banks_landing_logo'/>
        </div>
      </div>
  )
}

export default Banks