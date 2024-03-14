import { useContext, useState } from 'react'
import useProducts from '../hooks/useProducts'
import Modal from './Modal'
import { ProductsContext } from '../context/products'
import FormInput from './FormInput'

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
        <FormInput label='Titulo' value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <FormInput label='Categoría' value={category} onChange={(e) => { setCategory(e.target.value) }} />
        <FormInput label='Precio' value={price} onChange={(e) => { setPrice(parseInt(e.target.value)) }} />
        <FormInput label='Thumbnail' value={thumbnail} onChange={(e) => { setThumbnail(e.target.value) }} />
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
