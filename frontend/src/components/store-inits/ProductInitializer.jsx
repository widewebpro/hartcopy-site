'use client'

import { useEffect } from 'react'
import { useProductsStore } from '@/store/useProductStore'

export function ProductsInitializer({ products }) {
  const setProducts = useProductsStore((state) => state.setProducts)

  useEffect(() => {
    if (products) {
      setProducts(products)
    }
  }, [products, setProducts])

  return null
}