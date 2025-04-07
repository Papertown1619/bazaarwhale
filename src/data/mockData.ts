
import { ProductProps } from "@/components/products/ProductCard";

// Sample product images
const productImages = [
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1581235720704-06d3acfcb85f?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1600385546605-536b691202df?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1618354691249-18772bbac3c5?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1616464598261-26ee132de8e7?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&h=500&fit=crop",
];

// Sample locations
const locations = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
];

// Sample categories
const categories = ["Electronics", "Vehicles", "Property", "Furniture", "Clothing", "Books", "Sports", "Others"];

// Sample product titles by category
const productTitlesByCategory: Record<string, string[]> = {
  Electronics: [
    "iPhone 14 Pro Max - Like New",
    "Samsung 55\" 4K Smart TV",
    "Sony WH-1000XM4 Headphones",
    "MacBook Air M2 2023",
    "Dell XPS 15 Laptop",
    "iPad Pro 12.9\" 2022",
    "Nintendo Switch OLED",
    "Canon EOS R5 Camera",
  ],
  Vehicles: [
    "2020 Toyota Camry - Low Miles",
    "2018 Honda Civic - Great Condition",
    "2021 Tesla Model Y",
    "2017 Ford F-150 Truck",
    "2019 BMW X5 - Fully Loaded",
    "2022 Hyundai Tucson",
    "2016 Chevrolet Malibu",
    "2020 Harley Davidson Street Glide",
  ],
  Property: [
    "Luxury 3-Bedroom Apartment",
    "Downtown Studio for Rent",
    "Modern Office Space",
    "Vacation Cabin for Sale",
    "Beach House Rental",
    "City View Condo",
    "Commercial Space in Business District",
    "Farmhouse with 5 Acres",
  ],
  Furniture: [
    "Modern Sectional Sofa",
    "Queen Size Bed Frame",
    "Dining Table with 6 Chairs",
    "Antique Wooden Desk",
    "Outdoor Patio Set",
    "Leather Recliner",
    "Dresser with Mirror",
    "Coffee Table - Glass Top",
  ],
  Clothing: [
    "Designer Winter Coat - Size L",
    "Nike Air Jordan 1 - Size 10",
    "Vintage Leather Jacket",
    "Wedding Dress - Never Worn",
    "Gucci Handbag - Authentic",
    "Men's Suit - Size 42R",
    "Cashmere Sweater Set",
    "Ray-Ban Aviator Sunglasses",
  ],
  Books: [
    "Harry Potter Complete Collection",
    "Vintage Encyclopedia Set",
    "Stephen King Horror Collection",
    "Philosophy Books Bundle",
    "Cooking Books - Italian Cuisine",
    "Medical Textbooks",
    "Classic Literature Set",
    "Business Management Books",
  ],
  Sports: [
    "Mountain Bike - Trek Marlin 7",
    "Tennis Racket - Wilson Pro",
    "Golf Clubs - Complete Set",
    "Camping Tent - Sleeps 4",
    "Snowboard with Bindings",
    "Basketball Hoop - Adjustable",
    "Fishing Gear - Complete Set",
    "Yoga Mat and Blocks Set",
  ],
  Others: [
    "Handmade Pottery Collection",
    "Vintage Vinyl Records",
    "Power Tools Set",
    "Baby Stroller - Like New",
    "Guitar - Fender Stratocaster",
    "Art Supplies Bundle",
    "Gardening Tools Set",
    "Collectible Coins - Rare",
  ],
};

// Sample descriptions by category
const descriptionsTemplate = {
  Electronics: "In perfect working condition with minor cosmetic wear. Comes with all original accessories and packaging. Selling because I'm upgrading.",
  Vehicles: "Well maintained with regular service. Clean title, no accidents. Low mileage for its age. Recently detailed and ready for a new owner.",
  Property: "Great location with amazing views. Recently renovated with modern finishes. Close to public transportation, shopping, and restaurants.",
  Furniture: "Gently used in a smoke-free, pet-free home. Still in excellent condition. Sturdy construction with quality materials.",
  Clothing: "Only worn a few times. Like-new condition. No stains, tears, or alterations. From a smoke-free, pet-free home.",
  Books: "All books in great condition with minimal wear. No markings or highlights. Complete set with no missing volumes.",
  Sports: "Lightly used and well maintained. No damage or repairs needed. Selling because I no longer have time for this activity.",
  Others: "In excellent condition. Only used a handful of times. Comes from a clean, smoke-free environment. Great value for the price.",
};

// Generate random date within last year
const getRandomDate = () => {
  const now = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const randomTime = oneYearAgo.getTime() + Math.random() * (now.getTime() - oneYearAgo.getTime());
  return new Date(randomTime).toISOString();
};

// Generate random price based on category
const getRandomPrice = (category: string): number => {
  const ranges: Record<string, [number, number]> = {
    Electronics: [200, 2500],
    Vehicles: [5000, 50000],
    Property: [800, 5000], // Monthly rent or lease
    Furniture: [100, 2000],
    Clothing: [20, 500],
    Books: [10, 200],
    Sports: [50, 1000],
    Others: [20, 500],
  };

  const [min, max] = ranges[category] || [10, 1000];
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Generate a mock product
const generateMockProduct = (id: number): ProductProps => {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const titles = productTitlesByCategory[category] || ["Product Title"];
  const title = titles[Math.floor(Math.random() * titles.length)];
  const price = getRandomPrice(category);
  const isFeatured = Math.random() < 0.2; // 20% chance of being featured
  
  return {
    id,
    title,
    price,
    description: descriptionsTemplate[category as keyof typeof descriptionsTemplate] || "Product description",
    category,
    image: productImages[id % productImages.length],
    location: locations[Math.floor(Math.random() * locations.length)],
    isFeatured,
    createdAt: getRandomDate(),
  };
};

// Generate mock products
export const generateMockProducts = (count: number): ProductProps[] => {
  return Array.from({ length: count }, (_, index) => generateMockProduct(index + 1));
};

// Featured products (first 8 products marked as featured)
export const getFeaturedProducts = (allProducts: ProductProps[], count: number = 8): ProductProps[] => {
  return allProducts
    .filter(product => product.isFeatured)
    .slice(0, count);
};

// Recent products (last 8 products sorted by date)
export const getRecentProducts = (allProducts: ProductProps[], count: number = 8): ProductProps[] => {
  return [...allProducts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, count);
};

// Get products by category
export const getProductsByCategory = (allProducts: ProductProps[], category: string): ProductProps[] => {
  return allProducts.filter(product => product.category === category);
};

// Get a single product by ID
export const getProductById = (allProducts: ProductProps[], id: number): ProductProps | undefined => {
  return allProducts.find(product => product.id === id);
};

// Mock data initialization - generate 50 products
export const mockProducts = generateMockProducts(50);
