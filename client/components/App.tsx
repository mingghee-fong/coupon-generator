// import { useFruits } from '../hooks/useFruits.ts'
import { useCoupons } from '../hooks/useCoupons.ts'

import CouponListItem from './CouponListItem.tsx'
import AddCouponForm from './AddCoupon.tsx'
import VendorList from './VendorList.tsx'
import CouponList from './CouponList.tsx'
import CategoryList from './CategoryList.tsx'

function App() {
  const { data } = useCoupons()

  return (
    <>
      <div className="titlebox">
        <h1>Expired Coupons</h1>
      </div>
      {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
      <div className="landing">
        <div className="landing__left">
          <VendorList />
          <CategoryList />
        </div>
        <div className="landing__right">
          <CouponList />
        </div>
      </div>
    </>
  )
}

export default App
