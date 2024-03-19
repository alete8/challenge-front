import { useContext } from 'react'
import type { Filters, ListOfProducts } from '../types'
import { FiltersContext } from '../context/filters'

const useFilters = (): {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  filterProducts: (products: ListOfProducts) => ListOfProducts
} => {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products: ListOfProducts): ListOfProducts => {
    return products?.filter(product => {
      return (
        product.price != null && (product.price >= filters.minPrice) &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return {
    filters,
    setFilters,
    filterProducts
  }
}

export default useFilters
