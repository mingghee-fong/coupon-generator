import { useState } from 'react'
import styles from './PokemonListItem.module.css'
// API Import here
import { getVendors } from '../apis/vendors'
import { useMutation, QueryClient, useQuery } from '@tanstack/react-query'

// export default function List() {

export default function VendorList() {
  const {
    data: vendor,
    error,
    isLoading,
  } = useQuery({ queryKey: ['vendor'], queryFn: () => getVendors() }) //Get fruits will be the api function for coupons
  if (error) return <p>Vendor Error request</p>

  if (isLoading) {
    return (
      <>
        <p>unloading People skills</p>
      </>
    )
  }
  // const vendor: {
  //   id: number
  //   name: string
  // }[] = [
  //   { id: 1, name: 'Toys R Us' },
  //   { id: 2, name: 'Other' }
  // ]
  console.log(vendor)
  return (
    <>
      <div>
        <h2>Vendor List</h2>
        <ul>
          {vendor.vendor.map((vendor) => (
            <>
              <li key={vendor.VendorId}>{vendor.vendorName}</li>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}
