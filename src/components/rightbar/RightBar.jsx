import React from 'react'
import OrderSummary from './OrderSummary';
import Payment from './Payment';

const RightBar = () => {
  return (
    <div className="flex flex-col gap-5 w-full lg:w-[420px]">
        <OrderSummary/>
        <Payment/>
    </div>
  )
}

export default RightBar