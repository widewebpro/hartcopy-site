// app/stories/[slug]/page.jsx
import StoriesMain from '@/components/StoriesMain'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import { rawStories } from '@/helpers/stories'
import { StoriesInitializer } from '@/components/store-inits/StoriesInitializer'
export async function generateStaticParams() {
    return rawStories.map(story => ({
        slug: story.slug
    }))
}
export default async function StoryPage({ params }) {
    const { slug } = await params
    return (
        <div className="container md:flex">
            <StoriesInitializer stories={rawStories} activeSlug={slug} />


            <>
                <div className="md:hidden w-[calc(100%-1.5rem)] fixed top-12 left-12 right-12 z-50">
                    <Header />
                </div>
                <Sidebar page="stories" />
                <StoriesMain slug={slug} />


            </>

        </div>
    )
}