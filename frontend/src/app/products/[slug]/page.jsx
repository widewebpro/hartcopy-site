import ProductPageWrap from "@/components/ProductPageWrap";
import { products } from '@/helpers/products';

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}
export default async function ProductPage({ params }) {
    const resolvedParams = await params;

  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) return <div>Not Found</div>;
    return (
        <div className="container md:flex">
      <ProductPageWrap product={product} /> 
    </div>
    );
}