import React, { useState } from 'react'
import styles from './NewItem.module.scss'

export const NewItem: React.FC = () => {
   const [value, setValue] = useState('')
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
   }

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
   }

   return (
      <div className={styles.wrapper}>
         <form>
            <input
               type="text"
               value={value}
               onChange={handleChange}
               placeholder="Имя задачи..."
            />
            <button type="submit" onClick={handleClick}>
               Добавить
            </button>
         </form>
      </div>
   )
}
