export interface PortfolioItem {
  original: string;
  thumbnail: string;
  thumbnailAlt: string;
  originalAlt: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    original: '/images/Artcher.me_1900x1200.jpg',
    thumbnail: '/images/Artcher.me_150x100.jpg',
    thumbnailAlt: 'Self portrait in comic style',
    originalAlt: 'Self portrait in comic style',
  },
  {
    original: '/images/abstract_1900x1200.jpg',
    thumbnail: '/images/abstract_150x100.jpg',
    thumbnailAlt: 'abstract Pharaoh art',
    originalAlt: 'abstract Pharaoh art',
  },
  {
    original: '/images/CartoonCat_1900x1200.jpg',
    thumbnail: '/images/CartoonCat_150x100.jpg',
    thumbnailAlt: 'Hipster Cat like animal',
    originalAlt: 'Hipster Cat like animal',
  },
  {
    original: '/images/Light2sound_WP_1900x1200.jpg',
    thumbnail: '/images/Light2sound_WP_150x100.png',
    thumbnailAlt: 'Sound waves from a prism',
    originalAlt: 'Sound waves from a prism',
  },
];
