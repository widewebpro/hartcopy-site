import ProductGrid from "./ProductGrid"
import BottomPanel from "./BottomPanel"
import ProductSlider from "./ProductSlider"
import StoriesMain from "./StoriesMain"
export default function MainSection ({page}) {
    return (
        <div className="w-full md:flex md:flex-col md:ml-8 md:max-h-[calc(100vh-3rem)] pt-[1.188rem] md:h-screen md:overflow-hidden">
            {page === 'product' && (
                <ProductSlider/>
            ) }
            {page === 'stories' && (
                <StoriesMain/>
            ) }
            {
                !page &&
            (
                <>
                <ProductGrid/>
                <BottomPanel/>
                </>
            )}
            
        </div>
    )
}