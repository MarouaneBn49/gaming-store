export interface Product {
  id: number;
  brand: string;
  model: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  screen: string;
  price: number;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    brand: "Razer",
    model: "Blade 16",
    cpu: "Intel i9-14900HX",
    gpu: "RTX 4080 12GB",
    ram: "32GB DDR5",
    storage: "1TB SSD NVMe",
    screen: '16" QHD 240Hz',
    price: 28999,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=400&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 2,
    brand: "ASUS ROG",
    model: "Strix G18",
    cpu: "Intel i9-14900HX",
    gpu: "RTX 4070 8GB",
    ram: "16GB DDR5",
    storage: "1TB SSD NVMe",
    screen: '18" QHD 240Hz',
    price: 22499,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=600&h=400&fit=crop",
    badge: "Nouveau",
  },
  {
    id: 3,
    brand: "Lenovo",
    model: "Legion Pro 7i",
    cpu: "Intel i9-14900HX",
    gpu: "RTX 4080 12GB",
    ram: "32GB DDR5",
    storage: "2TB SSD NVMe",
    screen: '16" WQXGA 240Hz',
    price: 26499,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    brand: "ASUS TUF",
    model: "Gaming A15",
    cpu: "AMD Ryzen 9 7940HS",
    gpu: "RTX 4060 8GB",
    ram: "16GB DDR5",
    storage: "512GB SSD NVMe",
    screen: '15.6" FHD 144Hz',
    price: 14999,
    image: "https://images.unsplash.com/photo-1603302576839-377311c875d5?w=600&h=400&fit=crop",
    badge: "Populaire",
  },
  {
    id: 5,
    brand: "MSI",
    model: "Raider GE78 HX",
    cpu: "Intel i9-14900HX",
    gpu: "RTX 4070 8GB",
    ram: "32GB DDR5",
    storage: "1TB SSD NVMe",
    screen: '17.3" QHD 240Hz',
    price: 24999,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    brand: "Razer",
    model: "Blade 14",
    cpu: "AMD Ryzen 9 8945HS",
    gpu: "RTX 4070 8GB",
    ram: "16GB DDR5",
    storage: "1TB SSD NVMe",
    screen: '14" QHD 165Hz',
    price: 21999,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=400&fit=crop",
    badge: "Compact",
  },
  {
    id: 7,
    brand: "Lenovo",
    model: "Legion Slim 5",
    cpu: "AMD Ryzen 7 8845HS",
    gpu: "RTX 4060 8GB",
    ram: "16GB DDR5",
    storage: "512GB SSD NVMe",
    screen: '16" WUXGA 165Hz',
    price: 13999,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    brand: "MSI",
    model: "Stealth 16 Studio",
    cpu: "Intel i7-14700HX",
    gpu: "RTX 4060 8GB",
    ram: "32GB DDR5",
    storage: "1TB SSD NVMe",
    screen: '16" QHD+ 240Hz',
    price: 19999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
  },
];
