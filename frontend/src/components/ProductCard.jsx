'use client'
import { useEffect, useState } from 'react';
import { useProductsStore } from '@/store/useProductStore';
import Image from 'next/image';
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
    <div className={`product-card relative aspect-square transition-opacity duration-500 ${
        isDimmed ? "md:opacity-25" : "md:opacity-100"
      }`}
      onMouseEnter={() => {setHoveredIndex(index); setHoverWithDelay("grid", index)}}
      onMouseLeave={() => {setHoveredIndex(null); clearHover("grid")}}>
      {product.new &&
        <div className='w-25 absolute top-4 right-9 h-14  text-[0.5rem] flex items-center justify-center text-light-white rounded-[0.188rem] bg-red'>
          New
        </div>
      }
      <Image width={340} height={340} src={product.image} alt={product.name} />
      <span className='text-[0.5rem] absolute top-5 left-10'>{index + 1}</span>
    </div>
  );
}