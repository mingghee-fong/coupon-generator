//import { useState } from 'react'
//import styles from './PokemonListItem.module.css'
// API Import here
import { getFruits } from '../apis/fruits'
//import { useMutation, QueryClient, useQueryClient } from '@tanstack/react-query'

export function CatergoryMenu() {
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







// export default function CatergoryMenu() {
//   return (
//     <>
//       <div className="landing__nav">
//         <ul className="nav__list">
//           <h3 className="nav-list-title">Category List</h3>
//           <li>Food</li>
//           <li>Cosmetic</li>
//           <li>Clothing</li>
//           <li>Automotive</li>
//           <li>Tech Gadgets</li>
//           <li>Human</li>
//           <li>Junks</li>
//         </ul>
//         <ul className="nav__list">
//           <h3 className="nav-list-title">Vendor List</h3>
//           <li>food</li>
//           <li>Cosmetic</li>
//           <li>Clothing</li>
//           <li>Automotive</li>
//           <li>Tech Gadgets</li>
//           <li>Human</li>
//           <li>Junks</li>
//         </ul>
//       </div>
//     </>
//   )
// }
