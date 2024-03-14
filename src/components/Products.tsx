import { useContext } from 'react'
import type { ListOfProducts } from '../types'
import ProductCard from './ProductCard'
import { ProductsContext } from '../context/products'
import AddProductModal from './AddProductModal'
import EditProductModal from './EditProductModal'
import DeleteProductModal from './DeleteProductModal'

interface IProps {
  products: ListOfProducts
}

const Products = ({ products }: IProps): JSX.Element => {
  const { showAddModal, showEditModal, showDeleteModal } = useContext(ProductsContext)
  return (
    <>
      <ul className='flex flex-wrap justify-center gap-4'>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      {showAddModal && <AddProductModal />}
      {showEditModal && <EditProductModal />}
      {showDeleteModal && <DeleteProductModal />}
    </>

  )
}

export default Products
