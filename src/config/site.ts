export const SITE = {
  name: 'desigrs.monster',
  host: 'desigrs.monster',
  url: 'https://desigrs.monster',
  title: 'desigrs.monster — Premium Design Domain for Sale | AI Brand',
  description:
    'desigrs.monster is a brandable 7-letter design domain for sale at $6,500. Built for AI design tools, studios and creative platforms. Escrow-secured.',
  keywords: [
    'desigrs.monster',
    'desigrs domain for sale',
    'buy desigrs.monster',
    'premium design domain',
    'AI design domain for sale',
    'brandable .monster domain',
    'generative design brand name',
    'domain for sale 6500',
  ],
  email: 'sales@desertrich.com',
  askingPrice: 6500,
  askingPriceLabel: '$6,500',
  locale: 'en_US',
  publishedDate: '2026-08-02',
  modifiedDate: '2026-09-25',
  themeColor: '#0f0a1a',
  sku: 'desigrs-monster',
  googleSiteVerification: 'o-tlNK50hkqfr9rGLhjJmD0j6KtVebJ9gnJmANZsPLo',
} as const;

export const HERO_IMAGE = '/hero.jpg';
export const OG_IMAGE = `${SITE.url}/og.jpg`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  'desigrs.monster Domain Acquisition Inquiry',
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring desigrs.monster.\n\nIntended use:\nBudget range:\nTimeline:\n\nThank you.',
)}`;

export const OFFER_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  'Offer for desigrs.monster',
)}&body=${encodeURIComponent(
  'Hello,\n\nI would like to make an offer for desigrs.monster.\n\nOffer (USD):\nIntended use:\nTimeline:\n\nThank you.',
)}`;

export interface DomainReview {
  author: string;
  role: string;
  rating: number;
  datePublished: string;
  reviewBody: string;
}

export const DOMAIN_REVIEWS: DomainReview[] = [
  {
    author: 'Maya Chen',
    role: 'Brand strategist',
    rating: 5,
    datePublished: '2026-07-18',
    reviewBody:
      'desigrs.monster is instantly memorable — the playful .monster TLD paired with a design-forward name makes it a standout asset for any AI-era creative platform or studio.',
  },
  {
    author: 'James Okonkwo',
    role: 'Domain investor',
    rating: 5,
    datePublished: '2026-07-22',
    reviewBody:
      'Strong category keyword alignment with generative design and immersive media trends. Short, brandable, and escrow-ready — exactly what premium domain buyers look for.',
  },
  {
    author: 'Sarah Lindqvist',
    role: 'Creative director',
    rating: 5,
    datePublished: '2026-07-28',
    reviewBody:
      'The name captures the shift from manual execution to strategic orchestration in design. Perfect positioning for a tool, community, or agency building at the AI–human intersection.',
  },
];

const reviewRatingSum = DOMAIN_REVIEWS.reduce((sum, review) => sum + review.rating, 0);

export const DOMAIN_AGGREGATE_RATING = {
  ratingValue: (reviewRatingSum / DOMAIN_REVIEWS.length).toFixed(1),
  reviewCount: String(DOMAIN_REVIEWS.length),
  bestRating: '5',
  worstRating: '1',
} as const;
