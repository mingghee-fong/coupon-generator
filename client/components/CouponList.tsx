import { useState } from 'react'
import styles from './PokemonListItem.module.css'
// API Import here
import {
  useMutation,
  QueryClient,
  useQueryClient,
  useQuery,
} from '@tanstack/react-query'
import { getCoupons } from '../apis/coupons'

export default function CouponList() {
  const {
    data: coupon,
    error,
    isLoading,
  } = useQuery({ queryKey: ['coupon'], queryFn: () => getCoupons() })

  if (error) return <p>My Brother in Christ</p>

  console.log(coupon)

  if (isLoading)
    return (
      <>
        <p>bruh dis shit loading</p>
      </>
    )

  return (
    <>
      {coupon?.coupon.map((c) => {
        return (
          <div key={c.id} className="coupon">
            <div className="coupon-left">
              <h3 className="coupon-value">For {c.value} off</h3>
              <h2 className="coupon-item-name">{c.itemName}</h2>
              {/* <p className="coupon-no">#{c.id}</p> */}
            </div>
            <div className="coupon-right">
              <p className="coupon-vendor-name">- {c.vendorName}</p>
              <p className="coupon-date">{c.expirationDate}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}
