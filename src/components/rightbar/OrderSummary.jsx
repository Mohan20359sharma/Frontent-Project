import React from 'react'

const OrderSummary = () => {
  return (
    <div className="w-full rounded-xl bg-white p-6" style={{background:"rgb(255,255,255)"}}>
      <h2 className="mb-5 text-2xl font-bold text-slate-900">
        Order Summary
      </h2>

      <div className="flex flex-col sm:flex-row justify-between rounded-xl border border-blue-100 bg-white p-6 shadow-sm gap-4">
        <div>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-slate-900">
              ₹4,999
            </span>
            <span className="ml-2 text-sm text-slate-500">
              /month
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Includes 5,000 credits/mo.
          </p>
        </div>

        <div className="text-left">
          <p className="mb-2 text-xs font-bold tracking-widest text-blue-500">
            SELECTED PLAN
          </p>

          <h3 className="text-xl font-bold text-slate-900 ">
            Startup
          </h3>
        </div>
      </div>

      <button className="mt-5 flex h-10 w-full items-center justify-center gap-3 rounded-full border-2 border-blue-200 bg-slate-50 font-semibold text-blue-600 transition hover:bg-blue-50" style={{background:"rgb(245,248,255)"}}>
        <span className="flex h-4 w-4 items-center justify-center rounded-full border-1 border-blue-600">
          ↑
        </span>

        Upgrade to Growth Plan
      </button>
    </div>
  )
}

export default OrderSummary