import Cart from '@/components/Cart/Cart'

export const metadata = {
  title: 'Cart - Live Shopping',
  description: 'View and manage your shopping cart',
  image: '/favicon.ico',
  url: '/cart',
  twitter: {
    handle: '@your_twitter_handle',
    site: '@your_twitter_site',
    cardType: 'summary_large_image',
  },
  og: {
    type: 'website',
    url: '/cart',
    title: 'Cart',
    description: 'View and manage your shopping cart',
    image: '/favicon.ico',
  },
}

const page = () => {
  return <Cart/>
}

export default page
