'use client'
import { useEffect, useState } from 'react';
import { useProductsStore } from '@/store/useProductStore';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index }) {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
      const { hoveredIndex } = useProductsStore();

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
      >
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
      <span className='text-[0.5rem] absolute top-5 left-10'>{index + 1}</span>
    </div>
  );
}