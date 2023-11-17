// import { useFruits } from '../hooks/useFruits.ts'
import { useCoupons } from '../hooks/useCoupons.ts'
import { CouponList } from './CouponList.tsx'
import CouponListItem from './CouponListItem.tsx'
import CatergoryMenu from './Category.tsx'
import AddCouponForm from './AddCoupon.tsx'

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
          <CatergoryMenu />
        </div>
        <div className="landing__right">{/* Coupons here */}</div>
      </div>
    </>
  )
}

export default App
