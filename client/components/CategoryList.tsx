import { useState } from 'react'
import styles from './PokemonListItem.module.css'
// API Import here
import { getCategories } from '../apis/vendors'
import { useMutation, QueryClient, useQuery } from '@tanstack/react-query'

export default function CategoryList() {
  const {
    data: category,
    error,
    isLoading,
  } = useQuery({ queryKey: ['category'], queryFn: () => getCategories() }) //Get fruits will be the api function for coupons
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
  // console.log()
  return (
    <>
      <div>
        <h2>Category List</h2>
        <ul>
          {category.category.map((c) => (
            <>
              <li key={c.categoryId}>{c.categoryName}</li>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}
