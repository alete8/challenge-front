import { useContext } from 'react'
import type { Product } from '../types'
import EditIcon from '../assets/icons/EditIcon'
import DeleteIcon from '../assets/icons/DeleteIcon'
import { ProductsContext } from '../context/products'

interface IProps {
  product: Product
}

const ProductCard = ({ product }: IProps): JSX.Element => {
  const { setProductSelected, setShowEditModal, setShowDeleteModal } = useContext(ProductsContext)

  const handleEditProduct = (): void => {
    setProductSelected(product)
    setShowEditModal(true)
  }

  const handleDeleteProduct = (): void => {
    setProductSelected(product)
    setShowDeleteModal(true)
  }

  return (
    <div className='w-80 rounded-lg overflow-hidden shadow-lg flex flex-col justify-between'>
      <img src={product.thumbnail} alt={product.title} className='w-full h-48' />
      <div className="px-6 py-4">
        <label className="font-bold text-xl mb-2">{product.title}</label>
        <p className="text-gray-700 text-base">
          {product.category}
        </p>
      </div>
      <div className="p-6 flex justify-between">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">&#36;{product.price}</span>
        <div className='flex gap-2'>
          <div onClick={handleEditProduct}>
            <EditIcon />
          </div>
          <div onClick={handleDeleteProduct}>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
