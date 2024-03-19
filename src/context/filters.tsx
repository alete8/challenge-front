import React, { createContext, useState } from 'react'
import type { FiltersContextType } from '../types'

export const FiltersContext = createContext<FiltersContextType>({
  filters: {
    category: 'all',
    minPrice: 0
  },
  setFilters: () => { }
})

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
