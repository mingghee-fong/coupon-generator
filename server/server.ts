import express from 'express'
import * as Path from 'node:path'

import couponRoutes from './routes/coupon.ts'
import vendorRoutes from './routes/vendor.ts'
import categoryRoutes from './routes/category.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/coupons', couponRoutes)
server.use('/api/v1/vendor', vendorRoutes)
server.use('/api/v1/categories', categoryRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
