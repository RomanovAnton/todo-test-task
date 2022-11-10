import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchItems = createAsyncThunk('items/fetch', async () => {
   const response = await axios.get('http://localhost:3001/items')
   return response.data
})
