import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Users,
  Building2,
  Home,
  KeyRound,
  Landmark,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  Coins,
  CalendarDays,
  Phone,
  Mail,
  MapPinned,
  Clock,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Properties', href: '#properties' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Invest', href: '#invest' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const ABOUT_PILLARS = [
  {
    icon: MapPin,
    title: 'Strategic Locations',
    body: 'Prime properties in developing areas with high growth potential, carefully selected for maximum investment returns.',
  },
  {
    icon: HeartHandshake,
    title: 'Inclusive Solutions',
    body: 'Vacant stands to build dream homes, 2 & 3 bedroom modern houses and group buying opportunities. Blacklisted welcome.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Developments',
    body: 'Modern homes and apartments designed with high standards, ensuring comfort, security, and long-term value.',
  },
];

export type Property = {
  id: string;
  name: string;
  location: string;
  price: string;
  description: string;
  beds?: string;
  baths?: string;
  size: string;
  tags: ('For Sale' | 'Rent to Own' | 'Group Buying')[];
  badge?: string;
  image: string;
  featured?: boolean;
};

export const PROPERTIES: Property[] = [
  {
    id: 'ngonyama-stand',
    name: 'Ngonyama Lifestyle Estate (Stand)',
    location: 'North Riding',
    price: 'R450,000',
    description:
      'Beautiful property available for sale or rent-to-own. Deposit R299,000 with monthly repayments of R7,000.',
    beds: '2 - 4 Beds',
    baths: 'Baths',
    size: '250m²',
    tags: ['For Sale', 'Rent to Own'],
    image: '/ngonyama.jpg',
    featured: true,
  },
  {
    id: 'greenhills-nala',
    name: 'Greenhills Nala Estate',
    location: 'Randfontein Greenhills',
    price: 'R950,000',
    description:
      'Beautiful property available for sale or group buying of 4x properties with a once-off contribution of R165,000 with other likeminded individuals.',
    beds: '3 Beds',
    baths: '2 Baths',
    size: '150m²',
    tags: ['For Sale', 'Group Buying'],
    image: '/bhubesi.jpg',
    featured: true,
  },
  {
    id: 'ps-noble-apartments',
    name: 'P&S Noble Apartments',
    location: 'Randfontein',
    price: 'R350,000',
    description:
      'Modern 1-bedroom apartments, not far from the P&S Robinpark Estate development.',
    beds: '1 Beds',
    baths: '1 Baths',
    size: '45m²',
    tags: ['For Sale', 'Rent to Own'],
    image: '/p&s.jpg',
  },
  {
    id: 'ps-robin-park',
    name: 'P&S Robin Park Estate',
    location: 'Randfontein',
    price: 'R849,000',
    description:
      'Luxurious 2-bedroom home in our successfully newly built P&S Robinpark Estate development. Perfect for families seeking comfort and security.',
    beds: '2 Beds',
    baths: '1 Baths',
    size: '65m²',
    tags: ['For Sale', 'Rent to Own'],
    image: '/p&s2.jpg',
    featured: true,
  },
  {
    id: 'group-soldout',
    name: 'Group Buying Opportunity — Sold Out',
    location: 'Randfontein',
    price: 'R147,000 per investor',
    description:
      'Join our group buying initiative to acquire 8 premium properties. One-time investment of R147,000.',
    size: '8 Properties',
    tags: ['Group Buying'],
    badge: 'Sold Out',
    image: '/group.jpg',
  },
];

export const LOCATIONS = [
  { name: 'Greenhills', units: 6, image: '/exterior1.jpg' },
  { name: 'Robinpark', units: 3, image: '/exterior2.jpg' },
  { name: 'Kocksoord', units: 15, image: '/exterior3.jpg' },
  { name: 'Northriding', units: 1, image: '/exterior4.jpg' },
];

export const GALLERY_EXTERIOR = [
  '/exterior1.jpg',
  '/exterior2.jpg',
  '/exterior3.jpg',
  '/exterior4.jpg',
];

export const GALLERY_INTERIOR = [
  '/interior1.jpg',
  '/interior2.jpg',
  '/interior3.jpg',
  '/interior4.jpg',
  '/interior5.jpg',
  '/interior6.jpg',
  '/interior7.jpg',
  '/interior8.jpg',
  '/interior9.jpg',
  '/interior10.jpg',
  '/interior11.jpg',
  '/interior12.jpg',
  '/interior13.jpg',
  '/interior14.jpg',
  '/interior15.jpg',
  '/interior16.jpg',
];

export type PortfolioProject = {
  id: string;
  tag: string;
  name: string;
  location: string;
  body: string;
  image: string;
  gallery: string[];
  about: { heading: string; paragraphs: string[] }[];
  highlights: { icon: string; title: string; body: string }[];
  investment?: {
    heading: string;
    intro: string;
    details: { label: string; value: string }[];
    options: { title: string; body: string }[];
    extras: string[];
  };
  contactNote?: string;
};

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: 'thaba-view',
    tag: 'Boutique Lodge',
    name: 'Thaba View Lodge',
    location: 'Hartbeespoort',
    body: 'A vibrant home to wild wonders and adventurous souls. Own a 500m² piece of paradise in a game lodge.',
    image: '/thaba1.jpeg',
    gallery: ['/thaba1.jpeg', '/thaba2.jpeg', '/thaba3.jpeg', '/thaba4.jpeg', '/thaba5.jpeg'],
    about: [
      {
        heading: 'About Thaba View',
        paragraphs: [
          'Thabakgolo Boutique Game Lodge is not just any lodge — it\'s a vibrant home to wild wonders and adventurous souls like you.',
          'Imagine waking up every day feeling like you\'re on a thrilling wild venture holiday. Picture owning a 500m² land piece of this incredible place, where the beauty of the wild surrounds you and adventure is just outside your doorstep.',
          'This is your chance to own a slice of paradise in a game lodge that feels like home to both wildlife and adventurers. Don\'t miss out on making this dream a reality.',
        ],
      },
      {
        heading: 'About Our Animals',
        paragraphs: [
          'Wildlife animals: Zebra, Sable, Nyala, Kudu, Blesbok, White Blesbok, Warthog, Wildebeest, Impala, Eland and more.',
          'Imagine owning a piece of land — 500m² — where you can build your dream home and create a steady stream of income! By owning a share in this exclusive opportunity, you can design your personal retreat or use the space for short-term rentals, generating lifetime earnings.',
          'This is more than just land; it\'s your chance to blend luxury living with smart investment. Don\'t miss out on turning your dream into reality while building lasting financial security.',
        ],
      },
      {
        heading: 'Our Mission',
        paragraphs: [
          'Our mission is simple but powerful: to create a life that generates income for our communities, allowing you to transform your home into a source of ongoing revenue. Imagine a place where your property isn\'t just a retreat, but an investment that works for you — even when you\'re not using it.',
          'Welcome to a new kind of ownership. Our resort handles all the work, from maintenance to booming marketing efforts, so you can enjoy the benefits without any hassle. It\'s not just a share-block; it\'s a lifetime share — granting you unlimited opportunities at your stunning Boutique Lodge.',
          'Experience the perfect blend of security and luxury, surrounded by the serene sounds of birdsong in the wild. This is more than a vacation spot — it\'s a lifestyle where your home becomes a haven that pays you back.',
        ],
      },
      {
        heading: 'Resort Portfolio',
        paragraphs: [
          'Our resort portfolio offers a unique opportunity to connect deeply with the natural world. It\'s more than just land; it\'s a sanctuary where memories are made, where every day is a celebration of life\'s wonders. Close to Hartbeespoort Dam.',
          'Imagine yourself surrounded by the breathtaking beauty of nature, living in the heart of a vibrant ecosystem. Picture mornings awakened by the gentle rustling of leaves and the calls of the future majestic wildlife, evenings spent under starlit skies, and the joyous laughter of your loved ones echoing through the wilderness.',
          'Let your imagination run wild. See yourself and your family thriving in this heart of a beautiful wildlife haven — a place where every moment is infused with magic, wonder, and a profound sense of peace.',
        ],
      },
    ],
    highlights: [
      { icon: 'Trees', title: 'Wildlife Haven', body: 'Zebra, Sable, Nyala, Kudu, Blesbok, Warthog, Wildebeest, Impala, Eland and more roaming freely.' },
      { icon: 'Home', title: 'Flexible Home Options', body: 'Cozy 2-bedroom house plan or a spacious 5-bedroom design — you\'re not just investing in a place to live.' },
      { icon: 'TrendingUp', title: 'Lifetime Investment', body: 'A home that pays you back every month for the rest of your life, with unlimited holidays and endless opportunities.' },
      { icon: 'Utensils', title: 'Resort Amenities', body: 'Food restaurants and convenient stores offering visitors a perfect blend of nature, leisure, and convenience.' },
      { icon: 'Building2', title: 'Rental Income', body: 'If you\'re not using your house, the resort can rent it out on your behalf, generating income while you\'re away.' },
      { icon: 'MapPin', title: 'Close to Hartbeespoort Dam', body: 'A destination where adventure meets comfort, near one of South Africa\'s most scenic dams.' },
    ],
    investment: {
      heading: 'How to Invest',
      intro: 'Are you ready to invest in your dream game lodge? We\'re here to help you choose the perfect 1000m² incredible land to suit your needs and lifestyle.',
      details: [
        { label: 'Share Price', value: 'R450,000 per share' },
        { label: 'Land Size', value: '1000m²' },
      ],
      options: [
        { title: 'Payment Option 1', body: '50% down payment with balance settled within 2 to 3 months payment plan.' },
        { title: 'Payment Option 2', body: 'Share block financing available to ease your purchase process.' },
      ],
      extras: [
        'If you\'re not using your house, the resort can rent it out on your behalf, generating income while you\'re away.',
        'We\'re planning to enhance the experience with fantastic food restaurants and convenient stores.',
      ],
    },
    contactNote: 'We would love to share more details about how you can become part of this incredible journey.',
  },
  {
    id: 'greenlands',
    tag: 'Luxury Living',
    name: 'Greenlands Lifestyle Private Estate',
    location: 'Randfontein Middelvei 255iQ',
    body: 'Where luxury meets security in the perfect harmony of a private oasis. Affordable housing solutions without compromising on luxury.',
    image: '/greenland1.jpeg',
    gallery: ['/greenland1.jpeg', '/greenland2.jpeg', '/greenland3.jpeg', '/greenland4.jpeg', '/greenland5.jpeg'],
    about: [
      {
        heading: 'About Greenlands',
        paragraphs: [
          'Imagine owning a piece of paradise nestled in the breathtaking west rand of Gauteng, right along the main reef in Randfontein. Welcome to Greenland\'s private estate — where luxury meets security in the perfect harmony of a private oasis.',
          'We are not simply building a private estate; we are crafting a truly secure living environment that promises unparalleled peace of mind. Picture strolling through a stunning mini shopping center right within the estate, adding convenience and charm to your everyday life.',
          'Greenlands is committed to making your dream home a reality by offering affordable housing solutions without compromising on luxury. Let your investment speak for itself as you indulge in the ultimate residential experience.',
          'Owning a home at Greenlands is not just a purchase; it\'s a seamless journey to your ideal lifestyle. Our flexible payment options cater to any financial situation, ensuring that your path to homeownership is as smooth as possible.',
        ],
      },
      {
        heading: 'About Our Real Estate',
        paragraphs: [
          'At MKH (More Key Homes), we take pride in our team of highly qualified private agents, each with over a decade of experience in the real estate industry. Our dedicated agents ensure that every client receives personalized attention and expert guidance throughout the property purchasing process.',
          'The Greenlands Lifestyle Private Estate is a unique opportunity for individuals seeking a premium living experience. With stunning landscapes and luxurious amenities, this estate is sure to exceed your expectations. By choosing MKH as your real estate partner, you can rest assured that you will receive the best service and support every step of the way.',
        ],
      },
      {
        heading: 'Our Project',
        paragraphs: [
          'At Greenlands, we believe in bringing luxury to you at an affordable price point, without compromising on quality. Our estate is designed to ensure that you not only find value in your investment but also enjoy the convenience of being located close to everything you need.',
          'From top-rated schools to shopping centers, filling stations, and easy access to the town — all just a short 10-minute drive away, even during peak hours!',
          'Imagine coming home to a place where luxury meets affordability, and where every detail is crafted to make your life easier and more enjoyable. That\'s what Greenlands Estate is all about — creating a thriving community where you can truly live your best life.',
        ],
      },
    ],
    highlights: [
      { icon: 'ShieldCheck', title: 'Unparalleled Security', body: 'A truly secure living environment that promises peace of mind.' },
      { icon: 'ShoppingCart', title: 'Mini Shopping Center', body: 'Stunning shopping center right within the estate for your convenience.' },
      { icon: 'Sparkles', title: 'Affordable Luxury', body: 'Luxury housing solutions without compromising on quality.' },
      { icon: 'MapPin', title: 'Prime Location', body: '10-minute drive to schools, shops, filling stations, and town.' },
    ],
    investment: {
      heading: 'Land Investment Opportunity',
      intro: 'Looking for land to build your own home? Secure a vacant land 300 SQM at R250,000 to build your dream home.',
      details: [
        { label: 'Securing Deposit', value: 'R100,000' },
        { label: 'Balance Payable', value: 'Within 6 months' },
        { label: 'Land Size', value: '300 SQM' },
        { label: 'Price', value: 'R250,000' },
      ],
      options: [],
      extras: [],
    },
    contactNote: 'Are you considering becoming a part of the vibrant and environmentally-conscious Greenlands community? Contact the More Key Homes sales team now to get detailed information and access on how you can secure your spot in this exclusive neighborhood.',
  },
];

export const TEAM = [
  {
    name: 'Siyabonga Makhamba',
    role: 'Sales Person',
    experience: '7 years of experience',
    bio: 'An expert in finding the perfect property for his clients. His dedication to customer satisfaction and exceptional communication skills make him an asset to our team.',
    email: 'siyabonga@ekasinobleproperties.com',
    image: '/siyabonga.jpeg',
  },
  {
    name: 'Mapaseka Mojaki',
    role: 'Rental Specialist',
    experience: '6 years of experience',
    bio: 'Mapaseka specializes in helping blacklisted clients secure properties. With her expertise in negotiation and commitment to finding the best deals, she is a valuable member of our team.',
    email: 'mapaseka@ekasinobleproperties.com',
    image: '/mapaseka.jpeg',
  },
];

export const FAQS = [
  {
    q: 'What is Rent-to-Own and how does it work?',
    a: 'Rent-to-Own lets you occupy a property now while paying toward ownership over an agreed term. A portion of your monthly payment builds toward the purchase price, so you can own the home at the end of the term without a traditional mortgage upfront.',
  },
  {
    q: "Can I qualify for a property if I'm blacklisted?",
    a: 'Yes. We work with clients who have been blacklisted by offering alternative pathways such as rent-to-own, group buying, and our inclusive stokvel solutions. Speak to our rental specialist to find the option that fits your situation.',
  },
  {
    q: 'What areas do you have properties in?',
    a: 'Our current developments are in Greenhills, Robinpark, Kocksoord, and Northriding, with new locations added as we grow. Each location is chosen for its growth potential and community infrastructure.',
  },
  {
    q: 'How much deposit do I need for Rent-to-Own?',
    a: 'Deposits vary by property. For example, our Ngonyama Lifestyle Estate stand requires a R299,000 deposit with monthly repayments of R7,000. We tailor deposit structures to your budget where possible.',
  },
  {
    q: 'What is the Noble Property Stokvel?',
    a: 'The Noble Property Stokvel is a collective investment vehicle that returns 15% on your investment after 36 months. You join via the Stokfella app, contribute from R10,000 plus a R500 joining fee, and receive your payout at term end.',
  },
  {
    q: 'How does the group buying initiative work?',
    a: 'Group buying lets several likeminded investors co-purchase a portfolio of properties with a single once-off contribution each. It lowers the entry cost per investor and spreads risk across multiple properties.',
  },
  {
    q: 'When will the properties be ready for occupation?',
    a: 'Occupation timelines depend on the development stage. Completed homes are available immediately, while stands and off-plan units have construction schedules we share during your consultation.',
  },
  {
    q: 'Do you offer property management services?',
    a: 'Yes. We offer management services for owners in our estates, including tenant coordination, maintenance oversight, and levy administration. Ask our team for a service plan tailored to your unit.',
  },
];

export const CONTACT_INFO = {
  phones: ['011 527 1978', '065 921 3368', '079 275 8821'],
  email: 'info@ekasinobleproperties.com',
  address: ['P&S Robinpark Estate', '2 Fairway Crescent Road', 'Randfontein', 'South Africa'],
  hours: [
    { day: 'Monday - Friday', time: '09:30 - 16:00' },
    { day: 'Saturday', time: '9:00 - 15:00' },
    { day: 'Sunday', time: 'Closed' },
  ],
};

export const PROPERTY_TYPES = [
  'Stand / Vacant Land',
  '1 Bedroom Apartment',
  '2 Bedroom House',
  '3 Bedroom House',
  'Group Buying',
  'Stokvel Investment',
];

export const CONTACT_TIMES = ['Morning', 'Afternoon', 'Evening', 'Weekend'];
export const BUDGET_RANGES = [
  'Under R350,000',
  'R350,000 - R700,000',
  'R700,000 - R1,000,000',
  'Over R1,000,000',
];
export const EMPLOYMENT_STATUS = ['Employed', 'Self-Employed', 'Business Owner', 'Retired', 'Other'];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const ICONS = {
  MapPin, BedDouble, Bath, Maximize, Users, Building2, Home, KeyRound, Landmark,
  TrendingUp, ShieldCheck, HeartHandshake, Coins, CalendarDays, Phone, Mail,
  MapPinned, Clock,
};
