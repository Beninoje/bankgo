'use client';
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }:{ amount: number }) => {
  return (
    <div className='w-full pt-4'>
        <CountUp 
            end={amount}
            decimals={2}
            decimal="."
            prefix='$'
            className='dark:text-white'
        />
    </div>
  )
}

export default AnimatedCounter