import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JAMARQ Digital - Websites, Rebuilds & Web Systems',
    short_name: 'JAMARQ',
    description: 'Websites, rebuilds, and web systems that work and hold up over time.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0c',
    theme_color: '#0ce3f2',
    icons: [
      {
        src: '/brand/jamarq/mark.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
