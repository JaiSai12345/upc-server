import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'UPC Urban posh services',
  title: 'All Your Home Services in One Easy Subscription',
  description:
    'Get Instant Access to Trusted Local Experts for Every Need—One Plan, Countless Solutions, Zero Hassle',
  images: [
    {
      url: '/logo.png',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
