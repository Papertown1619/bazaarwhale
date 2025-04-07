import { ProductProps } from "@/components/products/ProductCard";

// Sample product images by category
const productImagesByCategory: Record<string, string[]> = {
  Electronics: [
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop", // iPhone
    "https://images.unsplash.com/photo-1581235720704-06d3acfcb85f?w=500&h=500&fit=crop", // TV
    "https://images.unsplash.com/photo-1618354691249-18772bbac3c5?w=500&h=500&fit=crop", // Headphones
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop", // Laptop
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop", // iPad
    "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500&h=500&fit=crop", // Nintendo
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop", // Camera
  ],
  Vehicles: [
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&h=500&fit=crop", // Toyota
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=500&fit=crop", // Honda
    "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=500&h=500&fit=crop", // Tesla
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&h=500&fit=crop", // Ford
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=500&fit=crop", // BMW
    "https://images.unsplash.com/photo-1614200179396-2bdb77383911?w=500&h=500&fit=crop", // Hyundai
    "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=500&h=500&fit=crop", // Chevy
    "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=500&h=500&fit=crop", // Harley
  ],
  Property: [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=500&fit=crop", // Apartment
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&h=500&fit=crop", // Studio
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=500&fit=crop", // Office
    "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?w=500&h=500&fit=crop", // Cabin
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500&h=500&fit=crop", // Beach House
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop", // City View
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=500&h=500&fit=crop", // Commercial
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=500&h=500&fit=crop", // Farmhouse
  ],
  Furniture: [
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&h=500&fit=crop", // Sofa
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop", // Bed
    "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=500&h=500&fit=crop", // Dining Table
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&h=500&fit=crop", // Antique Desk
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=500&fit=crop", // Patio
    "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=500&h=500&fit=crop", // Recliner
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&h=500&fit=crop", // Dresser
    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&h=500&fit=crop", // Coffee Table
  ],
  Clothing: [
    "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=500&fit=crop", // Winter Coat
    "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop", // Nike Shoes
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop", // Leather Jacket
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop", // Wedding Dress
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop", // Handbag
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop", // Suit
    "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=500&h=500&fit=crop", // Sweater
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop", // Sunglasses
  ],
  Books: [
    "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=500&h=500&fit=crop", // Harry Potter
    "https://images.unsplash.com/photo-1529148482759-b35b25c5f217?w=500&h=500&fit=crop", // Encyclopedia
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop", // Stephen King
    "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?w=500&h=500&fit=crop", // Philosophy
    "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=500&h=500&fit=crop", // Cooking
    "https://images.unsplash.com/photo-1585814240392-e35d87df7cf9?w=500&h=500&fit=crop", // Medical
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&h=500&fit=crop", // Classics
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&h=500&fit=crop", // Business
  ],
  Sports: [
    "https://images.unsplash.com/photo-1593492818316-69f90e79bc04?w=500&h=500&fit=crop", // Mountain Bike
    "https://images.unsplash.com/photo-1622279457486-28f24525420d?w=500&h=500&fit=crop", // Tennis
    "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500&h=500&fit=crop", // Golf
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=500&fit=crop", // Camping
    "https://images.unsplash.com/photo-1522056260075-46f264dfb359?w=500&h=500&fit=crop", // Snowboard
    "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500&h=500&fit=crop", // Basketball
    "https://images.unsplash.com/photo-1531130744926-146d5da489b0?w=500&h=500&fit=crop", // Fishing
    "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&h=500&fit=crop", // Yoga
  ],
  Others: [
    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=500&fit=crop", // Pottery
    "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&h=500&fit=crop", // Vinyl Records
    "https://images.unsplash.com/photo-1590939076211-7d745ecdb3f8?w=500&h=500&fit=crop", // Power Tools
    "https://images.unsplash.com/photo-1566454419290-57a0589c9c51?w=500&h=500&fit=crop", // Baby Stroller
    "https://images.unsplash.com/photo-1525201548942-d8732f6617f0?w=500&h=500&fit=crop", // Guitar
    "https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?w=500&h=500&fit=crop", // Art Supplies
    "https://images.unsplash.com/photo-1588507648828-c09e896948b0?w=500&h=500&fit=crop", // Gardening
    "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&h=500&fit=crop", // Coins
  ],
};

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

// Function to get an appropriate image for a product based on its title and category
const getImageForProduct = (title: string, category: string): string => {
  const images = productImagesByCategory[category] || [];
  if (images.length === 0) {
    return "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop"; // Default image
  }
  
  // Match image to title keywords
  const titleLower = title.toLowerCase();
  
  // Find the index of the product in the titles array
  const titles = productTitlesByCategory[category] || [];
  const titleIndex = titles.findIndex(t => title === t);
  
  // If we found a matching title and have an image for that index, use it
  if (titleIndex >= 0 && titleIndex < images.length) {
    return images[titleIndex];
  }
  
  // Fallback to first image in category
  return images[0];
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
    image: getImageForProduct(title, category),
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
