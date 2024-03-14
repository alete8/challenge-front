import { useContext, useState } from 'react'
import useProducts from '../hooks/useProducts'
import Modal from './Modal'
import { ProductsContext } from '../context/products'

const EditProductModal = (): JSX.Element => {
  const { productSelected, setShowEditModal } = useContext(ProductsContext)
  const { editProduct } = useProducts()
  const [title, setTitle] = useState(productSelected?.title)
  const [category, setCategory] = useState(productSelected?.category)
  const [price, setPrice] = useState(productSelected?.price)
  const [thumbnail, setThumbnail] = useState(productSelected?.thumbnail)

  const handleEditProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const productEdited = {
      id: productSelected?.id,
      title,
      category,
      price,
      thumbnail
    }
    editProduct(productEdited)
  }

  return (
    <Modal
      title="Editar Producto"
      onClose={() => {
        setShowEditModal(false)
      }}
    >
      <form
        className="flex flex-col items-center w-full gap-2 my-4"
        onSubmit={handleEditProduct}
      >
        <div className="flex flex-col w-full">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Titulo
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Categoría</label>
          <input
            type="text"
            id="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
          <input
            type="text"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={price}
            onChange={(e) => {
              setPrice(parseInt(e.target.value))
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="thumbnail" className="block text-gray-700 text-sm font-bold mb-2">Thumbnail</label>
          <input
            type="text"
            id="thumbnail"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={thumbnail}
            onChange={(e) => {
              setThumbnail(e.target.value)
            }}
          />
        </div>
        <div className='w-full'>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded w-full"
          >
            Editar
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default EditProductModal
