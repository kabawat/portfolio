export default function manifest() {
  return {
    name: 'Mukesh Singh',
    short_name: 'Kabawat',
    description: "Welcome to Mukesh Singh Kabawat's portfolio website. As a skilled software engineer, I showcase my expertise through projects and achievements. Explore my work to witness innovation and excellence in action.",
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '128x128',
        type: 'image/x-icon',
      },
      {
        src: '/logo.png',
        sizes: '2084x2084',
        type: 'image/png',
      },
    ],
  }
}