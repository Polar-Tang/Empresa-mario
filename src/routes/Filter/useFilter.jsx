import { useContext } from 'react'
import ProductosContext from '../context/ProductosContext.jsx'

export function useFilters () {
  const { filters, setFilters } = useContext({
    category : 'all',
    minPrice: 0
  })
  
  const { reloj } = useContext( ProductosContext )

  const filterProducts = (reloj) => {
    return reloj.filter(reloj => {
      return (
        reloj.precio >= filters.minPrice &&
        (
          filters.category === 'all' ||
          reloj.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}