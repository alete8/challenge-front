import React, { createContext, useState } from 'react'
import type { ProductsContextType } from '../types'

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  setProducts: () => { },
  productSelected: undefined,
  setProductSelected: () => { },
  showAddModal: false,
  setShowAddModal: () => { },
  showEditModal: false,
  setShowEditModal: () => { },
  showDeleteModal: false,
  setShowDeleteModal: () => { }
})

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState()
  const [productSelected, setProductSelected] = useState()
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, productSelected, setProductSelected, showAddModal, setShowAddModal, showEditModal, setShowEditModal, showDeleteModal, setShowDeleteModal }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
