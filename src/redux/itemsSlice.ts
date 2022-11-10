import { createSlice } from '@reduxjs/toolkit'
import { fetchItems } from './asyncAction'
import { IState } from './types'

const initialState: IState = {
   items: [],
   status: '',
   error: ''
}

const itemsSlice = createSlice({
   name: 'items',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchItems.pending, (state) => {
         state.status = 'loading'
      })
      builder.addCase(fetchItems.fulfilled, (state, action) => {
         state.items = action.payload
         state.status = 'resolved'
      })
      builder.addCase(fetchItems.rejected, (state, action) => {
         state.status = 'rejected'
         //ошибка
      })
   }
})

export const {} = itemsSlice.actions
export default itemsSlice.reducer
