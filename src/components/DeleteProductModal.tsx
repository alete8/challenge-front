import { useContext } from 'react'
import useProducts from '../hooks/useProducts'
import Modal from './Modal'
import { ProductsContext } from '../context/products'

const DeleteProductModal = (): JSX.Element => {
  const { productSelected, setShowDeleteModal } = useContext(ProductsContext)
  const { deleteProduct } = useProducts()

  const handleDeleteEditProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    deleteProduct(productSelected?.id)
  }

  return (
    <Modal
      title="Eliminar Producto"
      onClose={() => {
        setShowDeleteModal(false)
      }}
    >
      <form
        className="flex flex-col items-center w-full gap-2 my-4"
        onSubmit={handleDeleteEditProduct}
      >
        <div className="flex flex-col w-full">
          <span>Esta seguro que desea eliminar el producto?</span>
        </div>
        <div className='w-full'>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded w-full"
          >
            Eliminar
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default DeleteProductModal
