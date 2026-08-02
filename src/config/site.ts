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
