export interface Product {
  id: string | undefined
  title: string | undefined
  description?: string
  price: number | undefined
  discountPercentage?: number
  rating?: number
  stock?: number
  brand?: string
  category: string | undefined
  thumbnail: string | undefined
  images?: string[]
}

export type ListOfProducts = Product[] | undefined

export interface Filters {
  minPrice: number
  category: string
}

export interface ProductsContextType {
  products: ListOfProducts
  setProducts: (ListOfProducts) => void
  productSelected: Product | undefined
  setProductSelected: (Product) => void
  showAddModal: boolean
  setShowAddModal: (boolean) => void
  showEditModal: boolean
  setShowEditModal: (boolean) => void
  showDeleteModal: boolean
  setShowDeleteModal: (boolean) => void
}

export interface FiltersContextType {
  filters: Filters
  setFilters: (Filters) => void
}
