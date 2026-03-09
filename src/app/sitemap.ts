import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://serverbucket.com';
  
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/vps`, lastModified: new Date() },
    { url: `${baseUrl}/dedicated`, lastModified: new Date() },
    { url: `${baseUrl}/colocation`, lastModified: new Date() },
    { url: `${baseUrl}/locations`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
  ];
}