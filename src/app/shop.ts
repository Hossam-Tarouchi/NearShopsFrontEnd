export interface Shop {
  ShopId: number;
  ShopName: string;
  Distance: number;
}


export const SHOPS: Shop[] = [
  { ShopId: 1, ShopName: 'Shop 1', Distance: 3},
  { ShopId: 2, ShopName: 'Shop 2', Distance: 10 },
  { ShopId: 3, ShopName: 'Shop 3', Distance: 32 },
  { ShopId: 4, ShopName: 'Shop 4', Distance: 6 },
  { ShopId: 5, ShopName: 'Shop 5', Distance: 17 },
  { ShopId: 6, ShopName: 'Shop 6', Distance: 20 },
  { ShopId: 7, ShopName: 'Shop 7', Distance: 158 },
  { ShopId: 8, ShopName: 'Shop 8', Distance: 65 },
];


export const LIKEDSHOPS: Shop[] = [
  { ShopId: 1, ShopName: 'Shop 1', Distance: 3},
  { ShopId: 2, ShopName: 'Shop 2', Distance: 10 },
  { ShopId: 3, ShopName: 'Shop 3', Distance: 32 },
];

