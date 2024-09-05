import mongoose from 'mongoose'
import { beforeAll, afterAll } from '@jest/globals'

import { initDatabase } from '../db/init.js'

beforeAll(async () => {
  console.log('init database')
  await initDatabase()
})

afterAll(async () => {
  console.log('disconnect database')
  await mongoose.disconnect()
})
