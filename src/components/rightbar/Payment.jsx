import React, { useState } from 'react'
import { Wallet, Tag } from "lucide-react";

const Payment = () => {
  const subTotal = 14999.00;
  const gstRate=0.18;
  // const walletBalance = 500.00;
  
  const getDiscount=()=>{
    switch(selected){
        case "WELCOME20":
            return subTotal*0.20;
        case "ANNUAL50":
            return subTotal*0.50;
        default:
            return 0;
    }
  }
    
    const [open, setOpen] = useState(true);
    const [couponInput, setCouponInput] = useState("");
    const [selected, setSelected] = useState("");
    const [walletBalance, setWalletBalance] = useState(500);
    const [walletApplied, setWalletApplied] = useState(false);
    // const [appliedCoupon, setAppliedCoupon] = useState("");
    const applyWallet=()=>{
      if(walletApplied) return;
      setWalletApplied(true);
      setWalletBalance(0);
    }
    const applyCoupon=()=>{
      const coupon = coupons.find((c)=>{
        return c.code.toLowerCase()===couponInput.toLowerCase();
      })
      if(coupon){
        // setAppliedCoupon(coupon.code);
        setSelected(coupon.code);
        // setCouponInput("Coupon applied Successfully");
        alert(`Coupon ${coupon.code} applied successfully!`);
      }else{
        alert("Invalid coupon code");
        setCouponInput("");
      }
    }

    const coupons = [
        { code: "WELCOME20", description: "20% off on your first month" },
        { code: "ANNUAL50", description: "50% off on annual plans" },
    ];
    const handlePayment=()=>{
      const paymentData={
        subTotal: subTotal,
        gst: gst,
        couponDiscount: discount,
        total: total,
        walletDiscount: walletApplied? walletBalance:0,
        finalTotal: finalTotal,
        coupon:selected,
        finalTotal: finalTotal
      }
      console.log(paymentData);
      alert(`Proceeding to payment of ₹${finalTotal.toFixed(2)}`);
    }
    const discount = getDiscount();
    const discountedPrice = subTotal - discount;
    const gst=discountedPrice* gstRate;
    const total=discountedPrice+gst;
    const walletDiscount=walletApplied? 500:0;
    const finalTotal=total-walletDiscount;
  return (
     <div className="w-full bg-white p-6 rounded-[10px]" style={{background:"rgb(255,255,255)"}}>
      {/* Wallet Balance */}
      <div className="mb-4 flex items-center justify-between rounded-lg border bg-white p-4">
        <div className="flex items-center gap-3">
          <Wallet className="h-5 w-5 text-blue-500" />

          <div>
            <h3 className="font-semibold text-slate-800">
              Wallet Balance
            </h3>
            <p className="text-sm text-slate-500">
              ₹{walletBalance.toFixed(2)} available
            </p>
          </div>
        </div>

        <button onClick={applyWallet} disabled={walletApplied} className="rounded-md border border-blue-200 px-4 py-2 font-medium text-blue-600">
          {walletApplied ? "Applied" : "Apply"}
        </button>
      </div>

      {/* Coupon Section */}
      <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: 14 }}>
      
      {/* Header - Dropdown Toggle */}
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          marginBottom: open ? 12 : 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <i className="ti ti-tag" style={{ fontSize: 16, color: "#6B7280" }}></i>
          <span style={{ fontSize: 13, fontWeight: 500, color: "#111827" }}>
            Apply Coupon
          </span>
        </div>
        <i
          className={open ? "ti ti-chevron-up" : "ti ti-chevron-down"}
          style={{ fontSize: 16, color: "#6B7280" }}
        ></i>
      </div>

      {/* Dropdown Content */}
      {open && (
        <>
          {/* Coupon Input */}
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <input
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)}
              placeholder="Enter coupon code"
              style={{
                flex: 1,
                border: "1px solid #E5E7EB",
                borderRadius: 8,
                padding: "9px 12px",
                fontSize: 13,
                outline: "none",
                color: "#374151",
              }}
            />
            <button
              onClick={applyCoupon}
              style={{
                background: "transparent",
                border: "none",
                color: "#3B82F6",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Apply
            </button>
          </div>

          {/* Coupon Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {coupons.map((coupon) => (
              <div
                key={coupon.code}
                onClick={() => setSelected(coupon.code)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: selected === coupon.code
                    ? "1.5px solid #3B82F6"
                    : "1px solid #E5E7EB",
                  borderRadius: 8,
                  padding: "10px 12px",
                  cursor: "pointer",
                  transition: "border-color 0.15s",
                }}
              >
                {/* Left: Code + Description */}
                <div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginRight: 8 }}>
                    {coupon.code}
                  </span>
                  <span style={{ fontSize: 11, color: "#6B7280" }}>
                    {coupon.description}
                  </span>
                </div>

                {/* Right: Radio Button */}
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: `2px solid ${selected === coupon.code ? "#3B82F6" : "#D1D5DB"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {selected === coupon.code && (
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#3B82F6",
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>

      {/* Price Summary */}
      <div className="mt-6">
        <div className="mb-3 flex justify-between text-sm">
          <span className="text-slate-600">Subtotal</span>
          <span className="font-semibold">₹{subTotal.toFixed(2)}</span>
        </div>
        <div className="mb-3 flex justify-between text-sm text-green-600">
          <span>Coupon Discount</span>
          <span>-₹{discount.toFixed(2)}</span>
        </div>

        <div className="mb-4 flex justify-between text-sm">
          <span className="text-slate-600">Tax (18% GST)</span>
          <span className="font-semibold">₹{gst.toFixed(2)}</span>
        </div>


        <div className="mb-3 flex justify-between text-sm text-green-600">
          <span>Wallet Balance</span>
          <span>-₹{walletDiscount.toFixed(2)}</span>
        </div>
        <hr />

        <div className="mt-5 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900">
            Total due today
          </h2>

          <span className="text-xl font-bold text-blue-600">
            ₹{finalTotal.toFixed(2)}
          </span>
        </div>

        <button onClick={handlePayment} className="mt-6 w-full rounded-md bg-blue-600 py-3 font-bold font-semibold text-white transition hover:bg-blue-700">
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default Payment