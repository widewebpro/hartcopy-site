import { GLOBALS_QUERY } from '../queries/globals'
import { fetchGraphQL } from '../lib/graphql'
import "./globals.css"
import { SiteDataInitializer } from '@/components/store-inits/SiteDataInitializer'
import { ProductsInitializer } from '@/components/store-inits/ProductInitializer'
import { products } from '@/helpers/products'

export const metadata = {
  title: process.env.SITE_NAME,
  description: 'Hartcopy site'
}


export default async function RootLayout({ children }) {
  // const data = await fetchGraphQL(GLOBALS_QUERY, {}, {
  //   cache: 'force-cache',
  //   next: { revalidate: 3600 }
  // })


  // const globals = data?.globalEntries?.[0] || {

  // }
  const globals = {
    logo: [{ url: '/logo.svg' }],
  };
  const pages = [
    {
      id: 1,
      url: '/',
      title: 'Index'
    },
    {
      id: 2,
      url: '/stories',
      title: 'Stories'
    },
    {
      id: 3,
      url: '/shop',
      title: 'Shop'
    },
    {
      id: 4,
      url: '/bookmarks',
      title: 'Bookmarks'
    }
  ]
  const siteName = process.env.SITE_NAME || 'Hartcopy'
  const logo = globals?.logo?.[0] || {
    url: '/logo.svg'
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className='bg-light-grey'>
        <SiteDataInitializer data={{
          siteName,
          logo,
          pages
        }} />

        <ProductsInitializer products={products} />
        <main id="main" className="min-h-screen">
            {children}
        </main>
      </body>
    </html>
  )
}
