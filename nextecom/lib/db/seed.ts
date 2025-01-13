import data from '@/lib/data'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'
import { connectToDatabase } from '.'
import Product from './models/product.model'
import User from './models/user.model'


loadEnvConfig(cwd())
const main = async () => {
    try {
      const { products,users } = data
      await connectToDatabase(process.env.MONGODB_URI)
      await User.deleteMany()
      await Product.deleteMany()
      const createdProducts = await Product.insertMany(products)
      const createdUser = await User.insertMany(users)
      console.log({
        createdUser,
        createdProducts,
        message: 'Seeded database successfully',
      })

    }catch (error) {
        console.error(error)
        throw new Error('Failed to seed database')
      }
}

main()