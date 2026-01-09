'use client'
import { useEffect, useState } from 'react';
import { useProductsStore } from '@/store/useProductStore';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index }) {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { hoveredIndex } = useProductsStore();
  const favorites = useProductsStore(s => s.favorites);
    const toggleFavorite = useProductsStore(s => s.toggleFavorite);

  const isFavorite = product
    ? favorites.includes(product.id)
    : false;
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
    <div className={`product-card relative aspect-square transition-opacity duration-500 ${isDimmed ? "md:opacity-25" : "md:opacity-100"
      }`}
    >
      {isFavorite &&
        <div onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggleFavorite(product.id)
        }} className={`absolute right-9 ${product.new ? 'top-25' : 'top-4'}`}>
          <svg width="13" height="18" className="w-10 h-13 md:w-10 md:h-13" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0.750002C0 0.335791 0.323353 0 0.722222 0H12.2778C12.6766 0 13 0.335791 13 0.750002V17.25C13 17.5227 12.8576 17.7738 12.6279 17.906C12.3982 18.0381 12.1176 18.0305 11.895 17.886L6.5 14.3844L1.105 17.886C0.882367 18.0305 0.601741 18.0381 0.372118 17.906C0.14248 17.7738 0 17.5227 0 17.25V0.750002ZM1.44444 1.5V15.8969L5.73444 13.1124C6.20283 12.8085 6.79717 12.8085 7.26556 13.1124L11.5556 15.8969V1.5H1.44444Z" fill="black" />
            <path d="M0.677124 17.3907V1.21875L12.1875 0.515625V17.3907L6.77087 13.875L0.677124 17.3907Z" fill="black" />
          </svg>
        </div>
      }
      {product.new &&
        <div className='w-27 uppercase md:normal-case md:w-25 absolute top-4 right-9 h-14  text-[0.5rem] flex items-center justify-center text-light-white rounded-[0.188rem] bg-red'>
          New
        </div>
      }
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-full"
      >
        <Image
          width={340}
          height={340}
          src={product.image}
          alt={product.name}
          onLoadingComplete={() => setLoaded(true)}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <span className='text-[0.5rem] absolute top-5 left-10'>{product.id}</span>
    </div>
  );
}