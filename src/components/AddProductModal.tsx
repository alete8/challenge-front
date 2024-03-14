import { useContext, useState } from 'react'
import useProducts from '../hooks/useProducts'
import Modal from './Modal'
import { ProductsContext } from '../context/products'
import FormInput from './FormInput'

const AddProductModal = (): JSX.Element => {
  const { setShowAddModal } = useContext(ProductsContext)
  const { addProduct } = useProducts()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const [thumbnail, setThumbnail] = useState('')

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const newProduct = {
      id: crypto.randomUUID(),
      title,
      category,
      price,
      thumbnail
    }
    addProduct(newProduct)
  }

  return (
    <Modal
      title="Añadir Producto"
      onClose={() => {
        setShowAddModal(false)
      }}
    >
      <form
        className="flex flex-col items-center w-full gap-2 my-4"
        onSubmit={handleAddProduct}
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
            Añadir
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default AddProductModal
