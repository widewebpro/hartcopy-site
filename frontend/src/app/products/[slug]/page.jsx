import ProductPageWrap from "@/components/ProductPageWrap";
import { products } from '@/helpers/products';
import BottomPanel from "@/components/BottomPanel";
export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}
export default async function ProductPage({ params }) {
    const resolvedParams = await params;

  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) return <div>Not Found</div>;
    return (
        <div className="container md:flex !mb-24 !md:mb-0">
            <ProductPageWrap product={product} /> 
            <BottomPanel page='product' />
      
    </div>
    );
}