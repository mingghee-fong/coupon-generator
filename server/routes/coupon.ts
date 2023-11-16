import { Router } from 'express'

import * as db from '../db/db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const coupons = await db.getAllCoupons()

    res.json({ coupon: coupons.map((coupon) => coupon) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const coupons = await db.getACoupon(id)
    console.log(coupons)
    res.json({ coupons })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
