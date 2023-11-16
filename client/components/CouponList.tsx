import { useState } from 'react'
import styles from './PokemonListItem.module.css'
// API Import here
import { getFruits } from '../apis/fruits'
import { useMutation, QueryClient, useQueryClient } from '@tanstack/react-query'

// export default function CouponList() {
//   const {
//     data: coupon,
//     error,
//     isLoading,
//   } = useQuery({ queryKey: ['coupon'], queryFn: () => getFruits() }) //Get fruits will be the api function for coupons
//   if (error) return <p>My Brother in Christ</p>

//   if (isLoading)
//     return (
//       <>
//         <p>bruh dis shit loading</p>
//       </>
//     )
// }

export function CouponList() {
  const coupons: {
    id: number
    code: string
    discount: string
  }[] = [
    { id: 1, code: 'Voucher1', discount: '10%' },
    { id: 2, code: 'Voucher2', discount: '20%' },
    { id: 3, code: 'Voucher3', discount: '30%' },
    { id: 4, code: 'Voucher4', discount: '40%' },
  ]

  return (
    <>
      <div>
        <h2>Coupon List</h2>
        <ul>
          {coupons.map((coupon) => (
            <>
              <li key={coupon.id}>{coupon.code}</li>
              <li key={coupon.id}>{coupon.discount}</li>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}
