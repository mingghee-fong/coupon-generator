import { Router } from 'express'

import * as db from '../db/db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const vendors = await db.getAllVendors()
    console.log('Calling Vendors')
    res.json({ vendor: vendors.map((vendor) => vendor) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
