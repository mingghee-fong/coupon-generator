import { useFruits } from '../hooks/useFruits.ts'
import { CouponList } from './CouponList.tsx'
import CouponListItem from './CouponListItem.tsx'
import CatergoryMenu from './Category.tsx'
import AddCouponForm from './AddCoupon.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>Coupon Generator</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
        <CatergoryMenu />
        <CouponListItem />
        <AddCouponForm />
      </div>
    </>
  )
}

export default App
