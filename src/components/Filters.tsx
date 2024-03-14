import { useState } from 'react'
import useFilters from '../hooks/useFilters'

const Filters = (): JSX.Element => {
  const { filters, setFilters } = useFilters()
  const [minPrice, setMinPrice] = useState(0)

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMinPrice(parseInt(event.target.value))
    setFilters(() => ({
      ...filters,
      minPrice: parseInt(event.target.value)
    }))
  }

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilters(() => ({
      ...filters,
      category: event.target.value
    }))
  }

  return (
    <section className="flex items-center flex-wrap text-lg font-semibold gap-8">
      <div className="flex items-center gap-2">
        <label htmlFor="price">Precio Mínimo</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1800"
          onChange={handleMinPriceChange}
        />
        <span>&#36;{minPrice}</span>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="category">Categoría</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="all">Todas</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Perfumes</option>
          <option value="skincare">Cuidado Piel</option>
          <option value="groceries">Comestibles</option>
          <option value="home-decoration">Decoración Hogar</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
