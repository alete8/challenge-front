import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FiltersProvider } from './context/filters.tsx'
import { ProductsProvider } from './context/products.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProductsProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </ProductsProvider>
)
