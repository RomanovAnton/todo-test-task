import React from 'react'
import styles from './Categories.module.scss'

export const Categories: React.FC = () => {
   return (
      <div className={styles.wrapper}>
         <button>Все</button>
         <button>Важные</button>
         <button>Выполненные</button>
         <button>Невыполненные</button>
      </div>
   )
}
