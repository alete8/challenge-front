import { useContext } from 'react'
import Filters from './Filters'
import { ProductsContext } from '../context/products'

const Header = (): JSX.Element => {
  const { setShowAddModal } = useContext(ProductsContext)

  return (
    <header className='flex flex-col'>
      <h1 className='text-3xl font-bold text-center'>Challenge Frontend</h1>
      <div className='flex justify-between p-4'>
        <Filters />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => { setShowAddModal(true) }}
        >
          Añadir Producto
        </button>
      </div>
    </header>
  )
}

export default Header
