import { useContext } from 'react'
import type { Product, ListOfProducts } from '../types'
import { ProductsContext } from '../context/products'

const useProducts = (): {
  products: ListOfProducts
  setProducts: React.Dispatch<React.SetStateAction<ListOfProducts>>
  addProduct: (product: Product) => void
  editProduct: (product: Product) => void
  deleteProduct: (productId: string | undefined) => void
} => {
  const { products, setProducts, setShowAddModal, setShowEditModal, setShowDeleteModal } = useContext(ProductsContext)

  const addProduct = (product: Product): void => {
    setProducts((prevState: ListOfProducts) => [...(prevState as []), product])
    setShowAddModal(false)
  }

  const editProduct = (product: Product): void => {
    const productsEdited = products?.map((p: Product) => (p.id === product.id ? product : p))
    setProducts(productsEdited)
    setShowEditModal(false)
  }

  const deleteProduct = (productId: string | undefined): void => {
    const productsUpdated = products?.filter((product: Product) => product.id !== productId)
    setProducts(productsUpdated)
    setShowDeleteModal(false)
  }

  return {
    products,
    setProducts,
    addProduct,
    editProduct,
    deleteProduct
  }
}

export default useProducts
