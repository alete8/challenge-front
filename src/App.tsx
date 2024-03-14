import { useEffect } from 'react'
import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import Header from './components/Header'
import useFilters from './hooks/useFilters'
import useProducts from './hooks/useProducts'

const App = (): JSX.Element => {
  const { products, setProducts } = useProducts()
  const { filterProducts } = useFilters()

  useEffect(() => {
    setProducts(initialProducts)
  }, [])

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
