import React, { useEffect } from 'react'
import { Categories } from '../Categories/Categories'
import { NewItem } from '../NewItem/NewItem'
import { ItemsList } from '../ItemsList/ItemsList'
import styles from './App.module.scss'
import { fetchItems } from '../../redux/asyncAction'
import { RootState, useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'

const App: React.FC = () => {
   const dispatch = useAppDispatch()
   const { status, items } = useSelector((state: RootState) => state)

   console.log(items)
   console.log(status)

   useEffect(() => {
      dispatch(fetchItems())
   }, [])

   return (
      <div className={styles.container}>
         <h1>Todo list</h1>
         <Categories />
         <NewItem />
         <ItemsList />
      </div>
   )
}

export default App
