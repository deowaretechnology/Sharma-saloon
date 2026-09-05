export const SITE = {
  name: "Sharma's Salon",
  tagline: "Look Good | Feel Better | Be You",
  phone: "+91 91239 88105",
  phoneDisplay: "+91 91239 88105",
  whatsapp: "919123988105",
  email: "info@sharmasalon.com",
  address: "Ground Floor, Tarulia, Kolkata, West Bengal 700102, India",
  hours: "Mon – Sun : 9:00 AM – 9:00 PM",
  location: "Tarulia, Kolkata",
  url: "https://www.sharmasalon.com", // apna real domain daal dena
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];



export const TRUST_POINTS = [
  { label: "Expert Professionals" },
  { label: "Premium Products" },
  { label: "Hygienic & Safe" },
  { label: "Personalized Care" },
  { label: "Relaxing Ambience" },
  { label: "Unisex Salon" },
];

export const SERVICE_CATEGORIES = [
  "Women",
  "Men",
  "Bridal",
  "Hair",
  "Skin",
  "Makeup",
  "Nail Care",
  "Body Care",
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export type Service = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: ServiceCategory;
  gender: "Women" | "Men" | "Unisex";
  price: string; // display price, e.g. "₹899"
  priceValue: number; // numeric value used for sorting/filtering
  duration: string; // e.g. "45 Mins"
  badge?: string;
  quote?: string;
  author?: string;
};

export const SERVICES: Service[] = [
  {
    id: "hair-cut-styling",
    name: "Hair Cut & Styling",
    description: "Professional haircut with styling as per your personality.",
    image: "https://picsum.photos/seed/sharma-svc-haircut/600/600",
    category: "Hair",
    gender: "Women",
    price: "₹899",
    priceValue: 899,
    duration: "45 Mins",
    badge: "Most Booked",
    quote: "\"Best haircut I've had in years — the stylist really listened.\"",
    author: "— Ananya R., Regular Client",
  },
  {
    id: "mens-haircut",
    name: "Men's Haircut",
    description: "Trendy haircut with professional finishing.",
    image: "https://picsum.photos/seed/sharma-svc-menshaircut/600/600",
    category: "Men",
    gender: "Men",
    price: "₹399",
    priceValue: 399,
    duration: "30 Mins",
    quote: "\"Clean, sharp, consistent every single time.\"",
    author: "— Rohit M., Regular Client",
  },
  {
    id: "facial-treatment",
    name: "Facial Treatment",
    description: "Deep cleansing facial for glowing and healthy skin.",
    image: "https://picsum.photos/seed/sharma-svc-facial/600/600",
    category: "Skin",
    gender: "Unisex",
    price: "₹1,499",
    priceValue: 1499,
    duration: "60 Mins",
    quote: "\"My skin has never felt this fresh.\"",
    author: "— Meera J., Regular Client",
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    description: "Complete bridal makeup with HD finish.",
    image: "https://picsum.photos/seed/sharma-svc-bridal/600/600",
    category: "Bridal",
    gender: "Women",
    price: "₹15,999",
    priceValue: 15999,
    duration: "180 Mins",
    badge: "Bridal Favourite",
    quote: "\"Flawless finish that lasted the whole event.\"",
    author: "— Sneha K., Bride",
  },
  {
    id: "manicure-pedicure",
    name: "Manicure & Pedicure",
    description: "Keep your hands and feet healthy and beautiful.",
    image: "https://picsum.photos/seed/sharma-svc-nails/600/600",
    category: "Nail Care",
    gender: "Unisex",
    price: "₹799",
    priceValue: 799,
    duration: "60 Mins",
    quote: "\"So relaxing, and the polish actually lasts.\"",
    author: "— Priya S., Regular Client",
  },
  {
    id: "beard-styling",
    name: "Beard Styling",
    description: "Beard trim, shaping and professional grooming.",
    image: "https://picsum.photos/seed/sharma-svc-beard/600/600",
    category: "Men",
    gender: "Men",
    price: "₹399",
    priceValue: 399,
    duration: "30 Mins",
    quote: "\"Sharpest beard line-up in town.\"",
    author: "— Arjun K., Regular Client",
  },
  {
    id: "hair-spa",
    name: "Hair Spa",
    description: "Nourishing spa for soft, shiny and healthy hair.",
    image: "https://picsum.photos/seed/sharma-svc-spa/600/600",
    category: "Hair",
    gender: "Unisex",
    price: "₹1,299",
    priceValue: 1299,
    duration: "60 Mins",
    quote: "\"My hair has never felt this soft.\"",
    author: "— Kavya S., Regular Client",
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    description: "Look your best for parties and special occasions.",
    image: "https://picsum.photos/seed/sharma-svc-partymakeup/600/600",
    category: "Makeup",
    gender: "Women",
    price: "₹3,999",
    priceValue: 3999,
    duration: "90 Mins",
    badge: "Trending",
    quote: "\"Everyone asked who did my makeup!\"",
    author: "— Ishita D., Regular Client",
  },
  {
    id: "hair-colour",
    name: "Hair Colour",
    description: "Global or highlights colour to express your style.",
    image: "https://picsum.photos/seed/sharma-svc-colour/600/600",
    category: "Hair",
    gender: "Unisex",
    price: "₹1,899",
    priceValue: 1899,
    duration: "90 Mins",
    quote: "\"Vibrant colour that didn't damage my hair at all.\"",
    author: "— Ananya D., Regular Client",
  },
  {
    id: "body-massage-spa",
    name: "Body Massage & Spa",
    description: "Full-body relaxation massage to relieve stress.",
    image: "https://picsum.photos/seed/sharma-svc-bodyspa/600/600",
    category: "Body Care",
    gender: "Unisex",
    price: "₹2,499",
    priceValue: 2499,
    duration: "75 Mins",
    quote: "\"Left feeling like a completely new person.\"",
    author: "— Ritu M., Regular Client",
  },
  {
    id: "bridal-hair-styling",
    name: "Bridal Hair Styling",
    description: "Elegant bridal hairstyle with accessories included.",
    image: "https://picsum.photos/seed/sharma-svc-bridalhair/600/600",
    category: "Bridal",
    gender: "Women",
    price: "₹4,999",
    priceValue: 4999,
    duration: "120 Mins",
    quote: "\"Exactly the look I dreamed of for my wedding.\"",
    author: "— Neha P., Bride",
  },
  {
    id: "classic-shave",
    name: "Classic Shave",
    description: "Hot towel classic razor shave for a smooth finish.",
    image: "https://picsum.photos/seed/sharma-svc-shave/600/600",
    category: "Men",
    gender: "Men",
    price: "₹249",
    priceValue: 249,
    duration: "20 Mins",
    quote: "\"The closest, smoothest shave I've had.\"",
    author: "— Vikram T., Regular Client",
  },
];

export const REELS = [
  { title: "Hair Transformation", image: "https://picsum.photos/seed/sharma-reel-hair/500/620" },
  { title: "Facial", image: "https://picsum.photos/seed/sharma-reel-facial/500/620" },
  { title: "Men's Grooming", image: "https://picsum.photos/seed/sharma-reel-groom/500/620" },
  { title: "Hair Colour", image: "https://picsum.photos/seed/sharma-reel-colour/500/620" },
  { title: "Nail Art", image: "https://picsum.photos/seed/sharma-reel-nail/500/620" },
  { title: "Bridal", image: "https://picsum.photos/seed/sharma-reel-bridal/500/620" },
];

export const GALLERY_FILTERS = [
  "All",
  "Women",
  "Men",
  "Hair",
  "Skin",
  "Makeup",
  "Nail Care",
  "Bridal",
  "Salon Interior",
] as const;

export const GALLERY_ITEMS: {
  category: Exclude<(typeof GALLERY_FILTERS)[number], "All">;
  image: string;
  alt: string;
}[] = [
  { category: "Hair", image: "https://picsum.photos/seed/sharma-gal-hair1/500/620", alt: "Long wavy hair styling" },
  { category: "Men", image: "https://picsum.photos/seed/sharma-gal-men1/500/620", alt: "Men's fade haircut" },
  { category: "Bridal", image: "https://picsum.photos/seed/sharma-gal-bridal1/500/620", alt: "Bridal makeup look" },
  { category: "Nail Care", image: "https://picsum.photos/seed/sharma-gal-nails1/500/620", alt: "Fresh manicure" },
  { category: "Skin", image: "https://picsum.photos/seed/sharma-gal-skin1/500/620", alt: "Facial treatment" },
  { category: "Men", image: "https://picsum.photos/seed/sharma-gal-men2/500/620", alt: "Beard grooming" },
  { category: "Hair", image: "https://picsum.photos/seed/sharma-gal-hair2/500/620", alt: "Elegant hair updo" },
  { category: "Salon Interior", image: "https://picsum.photos/seed/sharma-gal-interior1/500/620", alt: "Salon styling stations" },
  { category: "Makeup", image: "https://picsum.photos/seed/sharma-gal-makeup1/500/620", alt: "Glam makeup look" },
  { category: "Hair", image: "https://picsum.photos/seed/sharma-gal-hair3/500/620", alt: "Rich auburn hair colour" },
  { category: "Women", image: "https://picsum.photos/seed/sharma-gal-women1/500/620", alt: "Hair styling in progress" },
  { category: "Skin", image: "https://picsum.photos/seed/sharma-gal-skin2/500/620", alt: "Skin care facial mask" },
  { category: "Men", image: "https://picsum.photos/seed/sharma-gal-men3/500/620", alt: "Men's haircut finishing" },
  { category: "Bridal", image: "https://picsum.photos/seed/sharma-gal-bridal2/500/620", alt: "Bridal hair accessory" },
  { category: "Salon Interior", image: "https://picsum.photos/seed/sharma-gal-interior2/500/620", alt: "Salon interior ambience" },
  { category: "Makeup", image: "https://picsum.photos/seed/sharma-gal-makeup2/500/620", alt: "Bridal jewellery makeup" },
  { category: "Hair", image: "https://picsum.photos/seed/sharma-gal-hair4/500/620", alt: "Balayage hair highlights" },
  { category: "Nail Care", image: "https://picsum.photos/seed/sharma-gal-nails2/500/620", alt: "Nail care hand massage" },
  { category: "Skin", image: "https://picsum.photos/seed/sharma-gal-skin3/500/620", alt: "Relaxing facial massage" },
  { category: "Salon Interior", image: "https://picsum.photos/seed/sharma-gal-interior3/500/620", alt: "Good Hair Good Mood signage" },
];

export const TESTIMONIALS = [
  {
    quote: "Amazing service! The staff is very professional and friendly. Highly recommended!",
    name: "Priya Sharma",
    role: "Client",
    image: "https://picsum.photos/seed/sharma-client1/120/120",
  },
  {
    quote: "Best salon in town! Loved my haircut and the ambience is so relaxing.",
    name: "Rohit Mehta",
    role: "Client",
    image: "https://picsum.photos/seed/sharma-client2/120/120",
  },
  {
    quote: "Professional service with great results. I always feel confident after my visit.",
    name: "Ananya Das",
    role: "Client",
    image: "https://picsum.photos/seed/sharma-client3/120/120",
  },
  {
    quote: "Amazing service! The staff is very professional and friendly. Highly recommended!",
    name: "Priya Sharma",
    role: "Client",
    image: "https://picsum.photos/seed/sharma-client1/120/120",
  },
  {
    quote: "Best salon in town! Loved my haircut and the ambience is so relaxing.",
    name: "Rohit Mehta",
    role: "Client",
    image: "https://picsum.photos/seed/sharma-client2/120/120",
  },
  {
    quote: "Professional service with great results. I always feel confident after my visit.",
    name: "Ananya Das",
    role: "Client",
    image: "https://picsum.photos/seed/sharma-client3/120/120",
  },
  {
    quote: "Amazing service! The staff is very professional and friendly. Highly recommended!",
    name: "Priya Sharma",
    role: "Client",
    image: "https://picsum.photos/seed/sharma-client1/120/120",
  },
  {
    quote: "Best salon in town! Loved my haircut and the ambience is so relaxing.",
    name: "Rohit Mehta",
    role: "Client",
    image: "https://picsum.photos/seed/sharma-client2/120/120",
  },
  {
    quote: "Professional service with great results. I always feel confident after my visit.",
    name: "Ananya Das",
    role: "Client",
    image: "https://picsum.photos/seed/sharma-client3/120/120",
  },
];

export const BLOG_POSTS = [
  {
    title: "5 Hair Care Tips for Healthy Hair",
    date: "Aug 25, 2025",
    image: "https://picsum.photos/seed/sharma-blog-hair/500/360",
  },
  {
    title: "Skincare Routine for Glowing Skin",
    date: "Aug 20, 2025",
    image: "https://picsum.photos/seed/sharma-blog-skin/500/360",
  },
  {
    title: "Bridal Makeup Trends 2025",
    date: "Aug 15, 2025",
    image: "https://picsum.photos/seed/sharma-blog-bridal/500/360",
  },
];

export const QUICK_BENEFITS = [
  { title: "Free Consultation", description: "Get expert advice" },
  { title: "Premium Products", description: "Only trusted brands" },
  { title: "Easy Online Booking", description: "Fast & convenient" },
  { title: "Customer Support", description: "We're always here" },
];
