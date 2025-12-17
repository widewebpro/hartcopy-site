'use client'
import { useEffect, useState } from 'react';
import { useProductsStore } from '@/store/useProductStore';
export default function ProductCard({ product, index }) {
  const [mounted, setMounted] = useState(false);
      const { hoveredIndex, setHoveredIndex, setHoverWithDelay, clearHover } = useProductsStore();

  useEffect(() => {
    setMounted(true);
  }, []);
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

  if (!mounted) {
    return (
      <div className="product-card placeholder">
      </div>
    );
  }

  return (
    <div className={`product-card relative aspect-square transition-opacity duration-200 ${
        isDimmed ? "md:opacity-25" : "md:opacity-100"
      }`}
      onMouseEnter={() => {setHoveredIndex(index); setHoverWithDelay("grid", index)}}
      onMouseLeave={() => {setHoveredIndex(null); clearHover("grid")}}>
      {product.new &&
        <div className='w-25 absolute top-4 right-9 h-14  text-[8px] flex items-center justify-center text-white rounded-[3px] bg-red'>
          New
        </div>
      }
      <img src={product.image} alt="" />
      <span className='text-[8px] absolute top-5 left-10'>{index}</span>
    </div>
  );
}