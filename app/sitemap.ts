import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ravjit.me', // Change this to your custom domain if you have one
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}