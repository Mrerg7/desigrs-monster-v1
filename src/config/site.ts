export const SITE = {
  name: 'desigrs.monster',
  host: 'desigrs.monster',
  url: 'https://desigrs.monster',
  title: 'desigrs.monster | The Domain for the Future of Design',
  description:
    'desigrs.monster is the premium domain for the AI-powered design era — where designers orchestrate generative systems, immersive experiences, and human-centered strategy. Available for acquisition.',
  email: 'sales@desertrich.com',
  askingPrice: 6500,
  askingPriceLabel: '$6,500',
  locale: 'en_US',
  publishedDate: '2026-08-02',
  googleSiteVerification: 'o-tlNK50hkqfr9rGLhjJmD0j6KtVebJ9gnJmANZsPLo',
} as const;

export const HERO_IMAGE = '/hero.jpg';
export const OG_IMAGE = `${SITE.url}/hero.jpg`;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  'desigrs.monster Domain Acquisition Inquiry',
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring desigrs.monster.\n\nIntended use:\nBudget range:\nTimeline:\n\nThank you.',
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
