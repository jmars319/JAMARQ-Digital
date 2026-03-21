import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JAMARQ Digital - Websites, Rebuilds & Web Systems',
    short_name: 'JAMARQ',
    description: 'Websites, rebuilds, and web systems built for clarity, ownership, and long-term use.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0c',
    theme_color: '#0ce3f2',
    icons: [
      {
        src: '/images/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
