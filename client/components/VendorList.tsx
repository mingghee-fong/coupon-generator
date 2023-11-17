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

export function VendorList() {
  const vendor: {
    id: number
    name: string
  }[] = [
    { id: 1, name: 'Toys R Us' },
    { id: 2, name: 'Other' }
  ]

  return (
    <>
      <div>
        <h2>Vendor List</h2>
        <ul>
          {vendor.map((vendor) => (
            <>
              <li key={vendor.id}>{vendor.name}</li>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}