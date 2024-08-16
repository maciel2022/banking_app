'use client'; 

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount } : { amount: number }) => {
  return (
    <CountUp
      decimals={2}
      decimal="."
      prefix="$ "
      end={amount}
      className='w-full text-center'
    />
  )
}

export default AnimatedCounter